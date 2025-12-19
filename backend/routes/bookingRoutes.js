import express from 'express';
const router = express.Router();
import {
    createEnquiry,
    getEnquiries,
} from '../controllers/bookingController.js';
import { simpleAdminProtect } from '../middleware/simpleAuth.js';

// Enquiries: POST is public, GET (viewing) is protected
router.route('/').post(createEnquiry).get(simpleAdminProtect, getEnquiries);

export default router;
