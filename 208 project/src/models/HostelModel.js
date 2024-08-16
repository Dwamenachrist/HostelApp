const mongoose = require('mongoose');

const hostelSchema = new mongoose.Schema({
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manager',
        required: true
    },
    managerDetails: {
        fullName: String,
        contact: String,
        email: String
    },
    hostelName: {
        type: String,
        required: true, 
        trim: true
    },    
    hostelReviews: {
        type: [String], 
        required: false 
    },
    hostelLocation: {
        type: String,
        required: true, 
        trim: true
    },
    hostelDescription: {
        type: String,
        required: true, 
        trim: true
    },
    hostelImage: String,
    rooms: [
        {
            roomNumber: {
                type: Number,
                required: true
            },
            type: {
                type: String,
                required: false,
                enum: ['Single', 'Double', 'Triple', 'Dormitory'] 
            },
            capacity: {
                type: Number,
                required: true,
                min: 1
            },
            description: {
                type: String,
                trim: true
            },
            images: [String],
            amenities: [String],
            available: {
                type: Boolean,
                default: true
            },
            bookingId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Booking'
            },
            bookings: [
                {
                    fullName: String,
                    phoneNumber: String,
                    email: String,
                }
            ]
        }
    ],
    createdAt: { 
        type: Date,
        default: Date.now 
    }
});

module.exports = mongoose.model('Hostel', hostelSchema);
