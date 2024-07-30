const jwt = require('jsonwebtoken');

const generateRefreshToken = (id) => {
    console.log(process.env.JWT_SECRET)
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d"})
}

module.exports = {generateRefreshToken}