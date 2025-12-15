// Test environment variables
import dotenv from 'dotenv';
dotenv.config();

console.log('Environment Variables:');
console.log('OWNER_EMAIL:', process.env.OWNER_EMAIL);
console.log('OWNER_WHATSAPP:', process.env.OWNER_WHATSAPP);
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***configured***' : 'NOT SET');
