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

    try {
        console.time('boatLookup');
        let boatTitle = boatName || boatType || 'General Enquiry';
        
        // Clean boatId: if it's not a valid MongoDB ObjectId (24 hex chars), unset it
        let validBoatId = null;
        if (boatId && /^[0-9a-fA-F]{24}$/.test(boatId)) {
            validBoatId = boatId;
        }

        if (validBoatId) {
            try {
                const boat = await Boat.findById(validBoatId);
                if (boat) {
                    boatTitle = boat.title;
                }
            } catch (err) {
                console.error('❌ [DEBUG] Boat lookup error:', err.message);
            }
        }
        console.timeEnd('boatLookup');

        const enquiry = new Enquiry({
            boat: validBoatId || undefined,
            boatType: boatTitle,
            customerName: name,
            customerEmail: email,
            customerPhone: phone,
            date: date || new Date(), // Fallback to now if date is missing/invalid
            guests: guests || 1,
            message: message || '',
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
            date: date || new Date(),
            guests: guests || 1,
            message: message || '',
            boatName: boatTitle
        };

        // Send Email to Owner (Non-blocking)
        sendOwnerNotification(enquiryData)
            .catch(err => console.error('Email failed:', err.message));

        // Send WhatsApp notification (Non-blocking)
        sendWhatsApp(enquiryData)
            .catch(err => console.error('WhatsApp failed:', err.message));

        return res.status(201).json(createdEnquiry);
    } catch (error) {
        console.error('❌ [DEBUG] Critical Error in createEnquiry:', error.message);
        res.status(500).json({ 
            message: 'Internal Server Error during enquiry creation', 
            error: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
});

// @desc    Get all enquiries (Admin)
// @route   GET /api/bookings
// @access  Public (Conceptually Admin only, but public for now per instruction "Remove authentication")
const getEnquiries = asyncHandler(async (req, res) => {
    const enquiries = await Enquiry.find({}).populate('boat');
    res.json(enquiries);
});

export { createEnquiry, getEnquiries };
