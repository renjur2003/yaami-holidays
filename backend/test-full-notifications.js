// Comprehensive test of the enquiry notification system
import dotenv from 'dotenv';
import { sendOwnerNotification } from './services/emailService.js';
import sendWhatsApp from './services/whatsappService.js';

dotenv.config();

const testData = {
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    date: "2025-12-25",
    guests: 4,
    message: "I would like to book this boat for Christmas",
    boatName: "Royal 2 Bedroom Premium"
};

console.log('\n========================================');
console.log('🧪 TESTING ENQUIRY NOTIFICATION SYSTEM');
console.log('========================================\n');

console.log('📋 Test Data:');
console.log(JSON.stringify(testData, null, 2));
console.log('\n');

// Test WhatsApp notification
console.log('📱 Testing WhatsApp Notification...');
console.log('----------------------------------------');
try {
    await sendWhatsApp(testData);
    console.log('✅ WhatsApp notification logged successfully\n');
} catch (error) {
    console.error('❌ WhatsApp notification failed:', error.message, '\n');
}

// Test Email notification  
console.log('📧 Testing Email Notification...');
console.log('----------------------------------------');
try {
    await sendOwnerNotification(testData);
    console.log('✅ Email notification sent successfully!');
    console.log(`   Sent to: ${process.env.OWNER_EMAIL}\n`);
} catch (error) {
    console.error('❌ Email notification failed:', error.message);
    if (error.message.includes('Invalid login')) {
        console.error('   ⚠️  Gmail App Password may be incorrect or not set\n');
    }
}

console.log('========================================');
console.log('✅ TEST COMPLETE');
console.log('========================================\n');

console.log('📝 Next Steps:');
console.log('1. Check yaamiholidays@gmail.com inbox for email');
console.log('2. Look for WhatsApp notification details above');
console.log('3. If email failed, update EMAIL_PASS in .env with Gmail App Password');
console.log('4. Restart the backend server to apply changes\n');
