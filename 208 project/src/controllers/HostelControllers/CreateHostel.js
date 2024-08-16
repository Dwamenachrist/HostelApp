const hostelSchema = require("../../models/HostelModel");
const asyncHandler = require("express-async-handler")
const Manager = require("../../models/ManagerModel")

const cloudinaryUploadImg = require('../../config/CloudinaryConfig');

const createHostel = asyncHandler(async (req, res) => {
    const managerId = req.params.id;
    const { hostelName, hostelLocation, hostelDescription } = req.body;

    if (!hostelName || !hostelLocation || !hostelDescription ) {
        return res.status(400).json({ message: "Please provide all fields." });
    }

    const managerExists = await Manager.findById(managerId)

    if (!managerExists) {
        return res.status(404).json({ message: "Unauthorized"});
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
                await fs.unlink(file.path); // Move file deletion here
            } catch (error) {
                console.error(`Error uploading or deleting file: ${path}`, error);
            }
        }

        const Images = urls.map((file) => file.url);

        const hostelDetails = {
            manager: managerExists._id,
            managerDetails:{
                fullName: managerExists.firstname + " " + managerExists.lastname, 
                contact: managerExists.contact,
                email: managerExists.email
            },
            hostelName,
            hostelLocation,
            hostelDescription,
            hostelImage: Images[0]
        };

        console.log(hostelDetails);

        const newHostel = await hostelSchema.create(hostelDetails);

        res.status(201).json(newHostel);

    } catch (e) {
        console.error('Error creating hostel:', e);
        res.status(500).json({ message: 'Internal Server Error', error: e.message });
    }
});



module.exports = {createHostel}