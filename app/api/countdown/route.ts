import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/flexipaygateway', {
    // Add any necessary options here
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err: any) => console.error('MongoDB connection error:', err));

// Define countdown schema
const countdownSchema = new mongoose.Schema({
  endTime: { type: Date, required: true },
});

// Create countdown model
const Countdown = mongoose.models.Countdown || mongoose.model('Countdown', countdownSchema);

// API route handlers
export const GET = async (req: NextRequest): Promise<NextResponse> => {
    try {
      const countdownData = await Countdown.findOne();
      if (countdownData) {
        return NextResponse.json({ endTime: countdownData.endTime.getTime() });
      } else {
        // Set a default end time (e.g., 20 days from now)
        const defaultEndTime = new Date(Date.now() + 20 * 24 * 60 * 60 * 1000);
        const newCountdown = new Countdown({ endTime: defaultEndTime });
        await newCountdown.save();
        return NextResponse.json({ endTime: defaultEndTime.getTime() });
      }
    } catch (err) {
      console.error('Error fetching countdown data:', err);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  };
  
  export const PUT = async (req: NextRequest): Promise<NextResponse> => {
    try {
      const { endTime } = await req.json();
      const countdownData = await Countdown.findOne();
      if (countdownData) {
        countdownData.endTime = new Date(endTime);
        await countdownData.save();
      } else {
        const newCountdown = new Countdown({ endTime: new Date(endTime) });
        await newCountdown.save();
      }
      return NextResponse.json({ message: 'Countdown updated successfully' });
    } catch (err) {
      console.error('Error updating countdown data:', err);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  };