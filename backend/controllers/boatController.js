import asyncHandler from 'express-async-handler';
import Boat from '../models/Boat.js';
import cloudinary from '../utils/cloudinary.js';

const getBoats = asyncHandler(async (req, res) => {
    const boats = await Boat.find({});
    res.json(boats);
});

const getBoatById = asyncHandler(async (req, res) => {
    const boat = await Boat.findById(req.params.id);
    if (boat) {
        res.json(boat);
    } else {
        res.status(404);
        throw new Error('Boat not found');
    }
});

const createBoat = asyncHandler(async (req, res) => {
    const { title, category, price, description, capacity, amenities, image } = req.body;
    
    const boat = new Boat({
        title,
        price,
        user: null, // No user ref anymore
        image: image || '/images/sample.jpg',
        category,
        capacity,
        description,
        rating: 0,
        numReviews: 0,
        amenities: amenities ? amenities : []
    });

    const createdBoat = await boat.save();
    res.status(201).json(createdBoat);
});

const deleteBoat = asyncHandler(async (req, res) => {
    const boat = await Boat.findById(req.params.id);

    if (boat) {
        await Boat.deleteOne({ _id: boat._id });
        res.json({ message: 'Boat removed' });
    } else {
        res.status(404);
        throw new Error('Boat not found');
    }
});

export { getBoats, getBoatById, deleteBoat, createBoat };
