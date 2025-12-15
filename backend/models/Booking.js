import mongoose from 'mongoose';

const enquirySchema = mongoose.Schema({
    boat: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Boat'
    },
    boatType: {
        type: String, // For general enquiries where specific boat isn't selected
        required: false
    },
    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true
    },
    customerPhone: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    guests: {
        type: Number,
        required: true
    },
    message: {
        type: String
    },
    status: {
        type: String,
        required: true,
        default: 'pending', // pending, contacted, closed
        enum: ['pending', 'contacted', 'closed']
    }
}, {
    timestamps: true
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);

export default Enquiry;
