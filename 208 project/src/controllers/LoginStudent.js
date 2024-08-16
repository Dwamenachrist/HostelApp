const {generateRefreshToken} = require("../config/refreshtoken");
const studentSchema = require('../models/StudentModel');
const asyncHandler = require("express-async-handler");
// const {isPasswordMatched} = require("../config/PasswordMatch")

const loginStudent = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    // Checks for the user to input all fields
    if (!email || !password) {
      return res.status(401).json({
        msg: 'provide all fields',
        success: false
      })
    }
  
    // Check if the user is authorized by finding the email in the database
    let user = await studentSchema.findOne({ email: req.body.email })
    if (!user) return res.status(400).send('invalid email or password!')
        
    
    // if the user is validated we generate a token upon login is sucessful and refresh token whenever the page is refreshed
    if (user && user.isPasswordMatched(password)) {
      const refreshToken = await generateRefreshToken(user?._id);
      const updateuser = await studentSchema.findByIdAndUpdate(
        user._id,
        {
          refreshToken: refreshToken,
        },
        { new: true }
      );
      
      res.cookie("refreshToken", refreshToken,{
        httpOnly: true,
        maxAge: 72 * 60 *1000,
      })
      return res.status(200).json({
        _id: user?._id,
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        mobile: user?.mobile,
        token: refreshToken
      })
    } else {
      return res.status(400).json({
        msg:'invalid email or password!',
        success: false,})
      }
  })
    

module.exports = {loginStudent}