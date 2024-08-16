const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const crypto = require('crypto');
const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function(value) {
        return /^[^s@]+@[^s@]+.[^s@]+$/.test(value);
      },
      message: props => '${props.value} is not a valid email.'
    }
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true,
    // trim: true,
    // validate: {
    //   validator: function(value) {
    //     return /^d{10}$/.test(value);
    //   },
    //   message: props => `${props.value} is not a valid phone number.`
    // }
  },
  bookings: [ 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking'
    }
  ],
  bookingDetails: {
    roomNumber: Number,
    capacity: Number,
    description: String,
    amenities: [String],
    images: []
  },

  createdAt: { 
    type: Date,
    default: Date.now 
  },
  profilePicture: String
});



studentSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
      next()
  };
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

studentSchema.methods.isPasswordMatched = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

studentSchema.methods.createPasswordResetToken = async function () {
  const resettoken = crypto.randomBytes(32).toString('hex');
  return resettoken;
}

module.exports = mongoose.model('Student', studentSchema);