// Direct test of notification services
import { sendOwnerNotification } from './services/emailService.js';
import sendWhatsApp from './services/whatsappService.js';

const testData = {
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    date: "2025-12-25",
    guests: 4,
    message: "I would like to book this boat for Christmas",
    boatName: "Royal 2 Bedroom Premium"
};

console.log('🧪 Testing notification services...\n');

// Test WhatsApp notification
console.log('📱 Testing WhatsApp notification:');
await sendWhatsApp(testData);

console.log('\n📧 Testing Email notification:');
try {
    await sendOwnerNotification(testData);
    console.log('✅ Email notification sent successfully!');
} catch (error) {
    console.error('❌ Email notification failed:', error.message);
}

console.log('\n✅ Test complete!');
