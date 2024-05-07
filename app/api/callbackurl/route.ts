import crypto from 'crypto';
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/flexipaygateway', {
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err:any) => console.error('MongoDB connection error:', err));

// Define payment details schema
const paymentDetailsSchema = new mongoose.Schema({
  orderId: String,
  amount: Number,
  currency: String,
  status: String,
  paymentMethod: String,
  createdAt: { type: Date, default: Date.now },
});

// Create payment details model
const PaymentDetails = mongoose.models.PaymentDetails || mongoose.model('PaymentDetails', paymentDetailsSchema);

// Secret key from the payment gateway
const SECRET_KEY = 'your_secret_key_from_icici_bank';

// API route handler
export const POST = async (req: NextRequest) => {

    const formData = await req.formData();
    const paymentDetails = Object.fromEntries(formData.entries());
    const signature = paymentDetails.signature;

    // Calculate the signature
    const calculatedSignature = crypto
        .createHmac('sha256', SECRET_KEY)
        .update(JSON.stringify(paymentDetails))
        .digest('hex');

    if (signature !== calculatedSignature) {
        console.error('Invalid signature, request may be tampered');
        return NextResponse.json({ error: 'Invalid signature' });
    }

    const paymentSuccessful = paymentDetails.status === 'success';

    if (paymentSuccessful) {
        try {
            const newPaymentDetails = new PaymentDetails(paymentDetails);
            await newPaymentDetails.save();
            console.log('Payment details stored successfully');
            return NextResponse.json('/success');
        } catch (err) {
            console.error('Error storing payment details:', err);
            return NextResponse.json({ error: 'Internal server error' }); // Remove the argument from the json() method call
        }
    } else {
        console.error('Payment failed:', paymentDetails);
        return NextResponse.json('/failure');
    }
    return NextResponse.json({ error: 'Method not allowed' });
  }
