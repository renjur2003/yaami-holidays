import 'dotenv/config';
import sendEmail from './services/emailService.js';

const test = async () => {
    console.log('Testing Resend Email...');
    try {
        if (!process.env.RESEND_API_KEY) {
            console.error('❌ Error: RESEND_API_KEY is missing from .env');
            return;
        }
        console.log('API Key present:', process.env.RESEND_API_KEY.substring(0, 5) + '...');

        await sendEmail({
            email: process.env.OWNER_EMAIL || 'keralaboatbooking7@gmail.com', // Use the owner email or fallback
            subject: 'Test Email from Yaami Holidays Debugger',
            message: 'This is a test email to verify the Resend integration is working.',
        });
        console.log('✅ Test email command executed successfully.');
    } catch (error) {
        console.error('❌ Test failed:', error.message);
        if (error.response) {
            console.error('Resend Response:', error.response.body);
        }
    }
};

test();
