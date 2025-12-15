import express from 'express';
const router = express.Router();
import {
    getBoats,
    getBoatById,
    createBoat,
    deleteBoat,
} from '../controllers/boatController.js';

// No protect/admin middleware - keeping it open or just simple
// Per "Remove authentication" instruction, we will remove middleware.
// However, creating boats is a distinct admin action.
// The user asked to "Remove authentication... The entire website should be open".
// I will remove the middleware.

router.route('/').get(getBoats).post(createBoat);
router
    .route('/:id')
    .get(getBoatById)
    .delete(deleteBoat);

export default router;
