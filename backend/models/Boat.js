import mongoose from 'mongoose';

const boatSchema = mongoose.Schema({
    // Removed user field
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['houseboat', 'shikara', 'speed-boat', 'motor-boat', 'canoe', 'kayaking']
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    amenities: [String],
    numReviews: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
});

const Boat = mongoose.model('Boat', boatSchema);

export default Boat;
