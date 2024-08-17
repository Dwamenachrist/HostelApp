const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const crypto = require('crypto');
var userSchema = new mongoose.Schema({
    firstname: {
        type: 'string',
        required: false,
    },
    lastname: {
        type: 'string',
        required: false,
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
    },
    telephonenumber: {
        type: 'string',
        required: true,
        unique: true,
    },
    password: {
        type: 'string',
        required: true,
    },
    row: {
        type: 'string',
        default: 'student',
    },a

})





userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    };
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.createPasswordResetToken = async function () {
    const resettoken = crypto.randomBytes(32).toString('hex');
    return resettoken;
}

module.exports = mongoose.model('User', userSchema)