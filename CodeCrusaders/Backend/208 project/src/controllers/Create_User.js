const asyncHandler = require('express-async-handler');
const User = require('../models/UserModels');
const CreateUser = asyncHandler (async (req, res) => {
    const { firstname, lastname, email, telephonenumber, password} = req.body;

    if(!firstname || !lastname || !email || !telephonenumber || !password) {
      return res.json({ message: 'Please enter all fields.' });
        
    }

    const userExists = await User.findOne({ email: email});
    if (userExists){
      return res.json({message: 'User already exists'}).status(400)
    }
    const newUser = await User.create({ email: email, firstname: firstname, lastname: lastname, telephonenumber: telephonenumber, password: password})
     return res.json({message: 'Account created successfully', newUser}).status(201)
   //res.json({message: "Hello!"})
})

module.exports = {CreateUser}
