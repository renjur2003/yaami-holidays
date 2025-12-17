import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
    console.log('📧 [DEBUG] Starting sendEmail...');
    
    // If no email config, skip
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.log('❌ [DEBUG] Skipping email sending: Credentials not found in process.env');
        console.log('EMAIL_USER present:', !!process.env.EMAIL_USER);
        console.log('EMAIL_PASS present:', !!process.env.EMAIL_PASS);
        return;
    }
    console.log(`📧 [DEBUG] Credentials found for user: ${process.env.EMAIL_USER}`);

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Use STARTTLS
        family: 4, // Force IPv4
        tls: {
            rejectUnauthorized: false // Bypass SSL verification issues causing hangs
        },
        connectionTimeout: 10000,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `Yaami Holidays <${process.env.EMAIL_USER}>`,
        to: options.email,
        subject: options.subject,
        text: options.message,
        html: options.html || options.message.replace(/\n/g, '<br>'),
    };

    try {
        console.log(`📧 [DEBUG] Attempting to send mail to: ${options.email} via port 465...`);
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ [DEBUG] Email sent successfully!');
        console.log('📧 [DEBUG] Message ID:', info.messageId);
        console.log('📧 [DEBUG] Response:', info.response);
    } catch (error) {
        console.error('❌ [DEBUG] Error in transporter.sendMail:');
        console.error(error);
        throw error; // Re-throw to be caught by controller
    }
};

// Send owner notification with enquiry details
export const sendOwnerNotification = async (enquiryData) => {
    const { name, email, phone, date, guests, message, boatName } = enquiryData;
    
    const ownerEmail = process.env.OWNER_EMAIL;
    if (!ownerEmail) {
        console.log('Owner email not configured');
        return;
    }

    const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: #1a1a1a; color: #d4af37; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
                <h1 style="margin: 0; font-size: 24px;">🚤 New Enquiry Received</h1>
            </div>
            <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h2 style="color: #1a1a1a; margin-top: 0;">Enquiry Details</h2>
                
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Boat:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #d4af37; font-weight: bold;">${boatName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Customer Name:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Phone:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">
                            <a href="tel:${phone}" style="color: #d4af37; text-decoration: none;">${phone}</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">
                            <a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Date:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">${new Date(date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Guests:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">${guests} person(s)</td>
                    </tr>
                    ${message ? `
                    <tr>
                        <td style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
                        <td style="padding: 10px;">${message}</td>
                    </tr>
                    ` : ''}
                </table>
                
                <div style="margin-top: 30px; padding: 15px; background-color: #f0f0f0; border-left: 4px solid #d4af37; border-radius: 4px;">
                    <p style="margin: 0; color: #555;">
                        <strong>Quick Actions:</strong><br>
                        <a href="https://wa.me/${phone}" style="color: #25D366; text-decoration: none; margin-right: 15px;">📱 WhatsApp</a>
                        <a href="tel:${phone}" style="color: #d4af37; text-decoration: none; margin-right: 15px;">📞 Call</a>
                        <a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">✉️ Email</a>
                    </p>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #888; font-size: 12px;">
                <p>This is an automated notification from Yaami Holidays booking system.</p>
            </div>
        </div>
    `;

    await sendEmail({
        email: ownerEmail,
        subject: `🚤 New Enquiry: ${boatName} - ${name}`,
        message: `New enquiry received for ${boatName}\n\nCustomer: ${name}\nPhone: ${phone}\nEmail: ${email}\nDate: ${date}\nGuests: ${guests}\nMessage: ${message || 'N/A'}`,
        html: htmlContent
    });
};

export default sendEmail;

