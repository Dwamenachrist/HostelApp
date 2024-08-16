const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const crypto = require('crypto');
var managerSchema = new mongoose.Schema({
    firstname: {
        type: 'string',
        required: false,
    },
    lastname: {
        type: 'string',
        required: false,
    },
    email: {
        type: String,
        required: true, // Ensure that this field is required
        trim: true,
        lowercase: true,
        validate: {
          validator: function(value) {
            return /^[^s@]+@[^s@]+.[^s@]+$/.test(value);
          },
          message: props => `${props.value} is not a valid email`
        }
    },
    contact: {
        type: String,
        unique: true,
        required: false
    },
    password: {
        type: 'string',
        required: true,
    },
    row: {
        type: 'string',
        default: 'manager',
    },

})





managerSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    };
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

managerSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

managerSchema.methods.createPasswordResetToken = async function () {
    const resettoken = crypto.randomBytes(32).toString('hex');
    return resettoken;
}

module.exports = mongoose.model('Manager', managerSchema)