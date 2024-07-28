const mongoose = require('mongoose')
var hostelSchema = new mongoose.Schema({
    hostelManagerName: {
        type: 'string',
    },
    hostelManagerContact: {
        type: 'string',
        unique: true
    },
    hostelManagerEmail: {
        type: 'string',
    },
    hostelName: {
        type: 'string',
    },
    hostelReviews: {
        type: [],
        required: false
    },
    hostelLocation: {
        tyep: 'string',
    },
    hostelDescription: {
        type: 'string',
    },
    hostelImages: {
        type: [],
    },

})

module.exports = mongoose.model('Hostel', hostelSchema)