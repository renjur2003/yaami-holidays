import express from 'express';
const router = express.Router();
import {
    createEnquiry,
    getEnquiries,
} from '../controllers/bookingController.js';

// No auth protection
router.route('/').post(createEnquiry).get(getEnquiries);

export default router;
