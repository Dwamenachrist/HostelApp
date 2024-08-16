const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    hostelId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hostel',
        required: true
    },
    roomNumber: {
        type: String,
        required: true,
        trim: true
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
    studentDetails: {
        fullName: String,
        phoneNumber: String,
        email: String,
    },
    description: {
        type: String,
        trim: true
    },
    amenities: {
        type: String, 
        enum: [
          'Wi-Fi', 
          'AC', 
          'Private Bathroom', 
          'TV', 
          'Laundry', 
          'Kitchen',
     
        ]
      },
    imageUrl: [],
    available: { 
        type: Boolean,
        default: true 
    },
    bookings: [ 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Booking'
        }
    ],
    createdAt: { 
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model('Room', roomSchema);
