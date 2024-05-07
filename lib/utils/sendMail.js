import nodemailer from 'nodemailer';

const sendEmail = async(data) => {
    const { name, email, subject, message } = data;

    try {
        let transport = nodemailer.createTransport({
            host: process.env.MAIL_SMTP_SERVER_HOST,
            port: process.env.MAIL_SMTP_SERVER_PORT,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        const selfMailOptions = {
            from: `FlexiFlowPay<${process.env.MAIL_USERNAME}>`,
            to: process.env.MAIL_USERNAME,
            subject: `📬 New query from ${name} - ${subject}`,
            html: `
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
          <div style="background-color: #f4f4f4; padding: 10px;">
            <div style="max-width: 600px; margin: 0 auto;">
              <div style="background-color: #fff; padding: 20px; text-align: start; border-radius: 15px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
                <h2 style="color: #444; font-size: 24px;">📝 New Query</h2>
                <p style="font-size: 16px; color: #666;">A new user has sent a query. Below are the details: <img src="https://res.cloudinary.com/duvnz67bv/image/upload/v1715096641/logos/lb1sae1rlcgv0ah5kzhr.png" alt="Project Logo" style="max-width: 100px; margin-top: 20px;"></p>
                <ul style="list-style-type: none; padding: 0; margin: 0;">
                  <li style="font-size: 16px; color: #666;">👤 Name: ${name}</li>
                  <li style="font-size: 16px; color: #666;">📧 Email: ${email}</li>
                  <li style="font-size: 16px; color: #666;">📋 Subject: ${subject}</li>
                  <li style="font-size: 16px; color: #666;">💬 Message: ${message}</li>
                </ul>
                <p style="font-size: 16px; color: #666;">Thanks,<br>FlexiFlowPay</p>
              </div>
            </div>
          </div>
        </body>
      `,
        };

        await transport.sendMail(selfMailOptions);

        const userMailOptions = {
            from: `FlexiFlowPay<${process.env.MAIL_USERNAME}>`,
            to: email,
            subject: '🎉 We received your query',
            html: `
        <body style="font-family: Arial, sans-serif; margin: 0 auto; padding: 0;">
          <div style="background-color: #f4f4f4; padding: 10px;">
            <div style="max-width: 600px; margin: 0;">
              <div style="background-color: #fff; padding: 20px; text-align: start; border-radius: 15px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
                <h2 style="color: #444; font-size: 24px;">🎉 We Received Your Query <img src="https://res.cloudinary.com/duvnz67bv/image/upload/v1715096641/logos/lb1sae1rlcgv0ah5kzhr.png" alt="Project Logo" style="max-width: 100px; margin-top: 20px;"></h2>
                <p style="font-size: 16px; color: #666;">Dear ${name},</p>
                <p style="font-size: 16px; color: #666;">We have received your query regarding "${subject}". Our team will get back to you soon. 🚀</p>
                <p style="font-size: 16px; color: #666;">Best,<br>FlexiFlowPay</p>
              </div>
            </div>
          </div>
        </body>
      `,
        };

        await transport.sendMail(userMailOptions);

        return { status: 'success', message: "🎉 Query submitted successfully!" };
    } catch (err) {
        return { statusbar: err, message: "😢 Something went wrong!" };
    }
};

export default sendEmail;