const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    hostelId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Hostel', 
        required: false,  
    },
    studentId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true 
    },
    startDate: { 
        type: Date,
        required: true 
    },
    endDate: { 
        type: Date, 
        required: true 
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled'],
        default: 'Pending'
    },
    createdAt: { 
        type: Date,
        default: Date.now 
    }    
    
});

module.exports = mongoose.model('Booking', bookingSchema)