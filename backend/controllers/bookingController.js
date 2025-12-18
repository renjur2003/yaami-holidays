import asyncHandler from 'express-async-handler';
import Enquiry from '../models/Booking.js';
import Boat from '../models/Boat.js';
import { sendOwnerNotification } from '../services/emailService.js';
import sendWhatsApp from '../services/whatsappService.js';

// @desc    Create new enquiry
// @route   POST /api/bookings (repurposed for enquiries)
// @access  Public
const createEnquiry = asyncHandler(async (req, res) => {
    const {
        boatId,
        boatType,
        date,
        guests,
        phone,
        name,
        email,
        message,
        boatName
    } = req.body;

    console.time('boatLookup');
    let boatTitle = boatName || boatType || 'General Enquiry';
    if (boatId) {
        try {
            const boat = await Boat.findById(boatId);
            if (boat) {
                boatTitle = boat.title;
            }
        } catch (err) {
            console.error('❌ [PERF] Boat lookup error:', err.message);
        }
    }
    console.timeEnd('boatLookup');

    const enquiry = new Enquiry({
        boat: boatId || undefined,
        boatType: boatTitle,
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        date,
        guests,
        message,
        status: 'pending'
    });

    console.time('enquirySave');
    const createdEnquiry = await enquiry.save();
    console.timeEnd('enquirySave');

    // Send notifications to OWNER (not customer)
    const enquiryData = {
        name,
        email,
        phone,
        date,
        guests,
        message: message || '',
        boatName: boatTitle
    };

    // Send Email to Owner (Non-blocking)
    sendOwnerNotification(enquiryData)
        .then(() => console.log('✅ Owner email notification sent successfully'))
        .catch(error => console.error('❌ Failed to send owner email:', error.message));

    // Send WhatsApp notification (Non-blocking)
    sendWhatsApp(enquiryData)
        .catch(error => console.error('❌ Failed to send WhatsApp notification:', error.message));

    res.status(201).json(createdEnquiry);
});

// @desc    Get all enquiries (Admin)
// @route   GET /api/bookings
// @access  Public (Conceptually Admin only, but public for now per instruction "Remove authentication")
const getEnquiries = asyncHandler(async (req, res) => {
    const enquiries = await Enquiry.find({}).populate('boat');
    res.json(enquiries);
});

export { createEnquiry, getEnquiries };
