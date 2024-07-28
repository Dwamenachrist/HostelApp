const hostelSchema = require("../../models/HostelModel");
const asyncHandler = require("express-async-handler")

const cloudinary = require('../../config/CloudinaryConfig');

const createHostel = asyncHandler (async(req,res) => {
    const {hostelManagerName, hostelManagerContact, hostelManagerEmail, hostelName, hostelLocation, hostelDescription } = req.body;
    if (!hostelManagerName || !hostelManagerContact || !hostelManagerEmail || !hostelName || !hostelLocation || !hostelDescription) {
        res.json({message: "Please provide all fields."}).status(400);
    }
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({message: "No files were uploaded."});
        }

    const file = require("../../assets/screenshotOfHome.jpg"); 
    console.log("image from postman...", file)
    const uploadResult = await cloudinary.uploader.upload(file).catch((error) => {
        console.log(error);
    });

    console.log("image Result ...", uploadResult)
    const hostelDetails = {
        hostelManagerName: hostelManagerName,
        hostelManagerContact: hostelManagerContact,
        hostelManagerEmail: hostelManagerEmail,
        hostelName: hostelName,
        hostelLocation: hostelLocation,
        hostelDescription: hostelDescription,
        hostelImages: [uploadResult]
    }

    const newHostel = await hostelSchema.create(hostelDetails) 

    res.json(newHostel).status(200)

    } catch (e) {
        throw new Error(e.message);
    }
})



module.exports = {createHostel}