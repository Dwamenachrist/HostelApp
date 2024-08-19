const asyncHandler = require('express-async-handler');
const Room = require('../models/RoomModel');
const Hostel = require('../models/HostelModel');
const cloudinaryUploadImg = require('../config/CloudinaryConfig')
const fs = require('fs');

const createRoom = asyncHandler(async(req,res) => {
    const hostelId = req.params.id
    console.log(hostelId);
    const { roomNumber, capacity, description, amenities } = req.body;
    const hostelAvailable = await Hostel.findById(hostelId);
    if(!hostelAvailable){
        return res.status(400).json({message: 'Hostel not found'})
    }
    try {
        const uploader = async (path) => cloudinaryUploadImg(path);
        const urls = [];
        const files = req.files;
         
        for (const file of files) {
            const { path } = file;
            try {
                const newpath = await uploader(path);
                urls.push(newpath);
                await fs.unlink(file.path);
            } catch (error) {
                console.error(`Error uploading or deleting file: ${path}`, error);
            }
        }
        // const Images = urls.map((file)=> {
        //     urls.push(file.url)
        // })

        // console.log("Images ...", Images)

        const newRoom = {
            roomNumber: roomNumber,
            capacity: capacity,
            description: description,
            amenities: amenities,
            images: urls

        }

        hostelAvailable.rooms.push(newRoom);
        await hostelAvailable.save();

        return res.json(newRoom).status(200)

    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}) 

module.exports = {createRoom}