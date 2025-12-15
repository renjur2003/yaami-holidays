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

    let boatTitle = boatName || boatType || 'General Enquiry';
    if (boatId) {
        const boat = await Boat.findById(boatId);
        if (boat) {
            boatTitle = boat.title;
        }
    }

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

    const createdEnquiry = await enquiry.save();

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

    // Send Email to Owner
    try {
        await sendOwnerNotification(enquiryData);
        console.log('✅ Owner email notification sent successfully');
    } catch (error) {
        console.error('❌ Failed to send owner email:', error.message);
        // Continue execution - don't fail the enquiry
    }

    // Send WhatsApp notification to Owner
    try {
        await sendWhatsApp(enquiryData);
        console.log('✅ Owner WhatsApp notification logged');
    } catch (error) {
        console.error('❌ Failed to send WhatsApp notification:', error.message);
    }

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
