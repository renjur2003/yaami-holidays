// WhatsApp notification service
// Note: Actual WhatsApp message sending requires user interaction via wa.me links
// This service logs the notification and provides the wa.me link for manual sending

const sendWhatsAppNotification = async (enquiryData) => {
    const { name, email, phone, date, guests, message, boatName } = enquiryData;
    const ownerPhone = process.env.OWNER_WHATSAPP;
    
    if (!ownerPhone) {
        console.log('Owner WhatsApp number not configured');
        return;
    }

    // Format the message for WhatsApp
    const whatsappMessage = `🚤 *New Enquiry Received*

*Boat:* ${boatName}
*Customer:* ${name}
*Phone:* ${phone}
*Email:* ${email}
*Date:* ${new Date(date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
*Guests:* ${guests} person(s)
${message ? `*Message:* ${message}` : ''}

_This is an automated notification from Yaami Holidays._`;

    // Create wa.me link (for reference/logging)
    const waLink = `https://wa.me/${ownerPhone}?text=${encodeURIComponent(whatsappMessage)}`;
    
    console.log('\n========================================');
    console.log('📱 WHATSAPP NOTIFICATION TO OWNER');
    console.log('========================================');
    console.log(`To: ${ownerPhone}`);
    console.log(`\nMessage:\n${whatsappMessage}`);
    console.log(`\nwa.me Link: ${waLink}`);
    console.log('========================================\n');
    
    // Note: For actual WhatsApp API integration, you would need:
    // 1. WhatsApp Business API account
    // 2. Valid access token
    // 3. Phone number ID
    // For now, this logs the notification for the owner to see in server console
};

export default sendWhatsAppNotification;

