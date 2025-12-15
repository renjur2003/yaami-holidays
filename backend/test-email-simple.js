// Simple email test
import dotenv from 'dotenv';
import { sendOwnerNotification } from './services/emailService.js';

dotenv.config();

const testData = {
    name: "Test User",
    email: "test@example.com",
    phone: "9876543210",
    date: "2025-12-25",
    guests: 2,
    message: "This is a test enquiry",
    boatName: "Royal 2 Bedroom Premium"
};

console.log('Testing email notification...\n');

try {
    await sendOwnerNotification(testData);
    console.log('✅ SUCCESS! Email sent to:', process.env.OWNER_EMAIL);
    console.log('\nPlease check your inbox at yaamiholidays@gmail.com');
} catch (error) {
    console.log('❌ FAILED:', error.message);
}
