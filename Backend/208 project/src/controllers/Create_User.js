const asyncHandler = require('express-async-handler');
const Manager = require('../models/ManagerModel');
const Student = require('../models/StudentModel');
const cloudinaryUploadImg = require('../config/CloudinaryConfig');

const SignUpManager = asyncHandler (async (req, res) => {
    const { firstname, lastname, email, contact, password} = req.body;

    if(!firstname || !lastname || !email || !contact || !password) {
      return res.json({ message: 'Please enter all fields.' });
        
    }

    const userExists = await Manager.findOne({ email: email});
    if (userExists){
      return res.json({message: 'User already exists'}).status(400)
    }
    const newUser = await Manager.create({ email: email, firstname: firstname, lastname: lastname, contact: contact, password: password})
     return res.json({message: 'Account created successfully', newUser}).status(201)
   //res.json({message: "Hello!"})
})


const SignUpStudent = asyncHandler(async(req, res) => {
  const { firstName, lastName, email, phoneNumber, password} = req.body;

    if(!firstName || !lastName || !email || !phoneNumber || !password) {
      return res.json({ message: 'Please enter all fields.' });
    }
  
  const userExists = await Student.findOne({ email: email});
  if (userExists){
    return res.status(400).json({message: 'User already exists'})
  }
  const newUser = await Student.create({ email: email, firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, password: password})
     return res.status(201).json({message: 'Account created successfully', newUser})

})

module.exports = {SignUpManager, SignUpStudent}

