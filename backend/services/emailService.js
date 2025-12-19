import { Resend } from 'resend';

const sendEmail = async (options) => {
    try {
        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            throw new Error("RESEND_API_KEY is missing in environment variables");
        }
        
        const resend = new Resend(resendApiKey);

        const { data, error } = await resend.emails.send({
            from: 'Yaami Holidays <onboarding@resend.dev>', // Update to your verified domain in production
            to: [options.email],
            subject: options.subject,
            html: options.html || options.message.replace(/\n/g, '<br>'),
        });

        if (error) {
            console.error('❌ Resend Email Error:', error);
            throw new Error(error.message);
        }

        console.log('✅ Email sent successfully:', data.id);
        return data;
    } catch (error) {
        console.error('❌ Email send exception:', error);
        throw error;
    }
};

// Send owner notification with enquiry details
export const sendOwnerNotification = async (enquiryData) => {
    const { name, email, phone, date, guests, message, boatName } = enquiryData;
    
    const ownerEmail = process.env.OWNER_EMAIL || 'keralaboatbooking7@gmail.com'; // Fallback if env missing during testing
    
    // Formatting the date for display
    const formattedDate = new Date(date).toLocaleDateString('en-IN', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

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
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">${formattedDate}</td>
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
                        <a href="https://wa.me/+91${phone}" style="color: #25D366; text-decoration: none; margin-right: 15px;">📱 WhatsApp</a>
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

    // Only send the owner notification
    await sendEmail({
        email: ownerEmail,
        subject: `🚤 New Enquiry: ${boatName} - ${name}`,
        message: `New enquiry received for ${boatName}`, // Fallback text
        html: htmlContent
    });
};

export default sendEmail;


