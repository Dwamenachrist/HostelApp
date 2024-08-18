const Student = require('../models/StudentModel')
const asyncHandler = require("express-async-handler")
const cloudinaryUploadImg = require('../config/CloudinaryConfig')
const updateStudent = asyncHandler(async(req, res) => {
    const studentId = req.params.id;
    try {
        const uploader = async (path) => cloudinaryUploadImg(path);
        const urls = [];
        const files = req.files;

        console.log(files);

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

        const profilePictureUrl = urls[0];        
        console.log("Profile Picture URL:", profilePictureUrl);
        const updatedUser = await Student.findByIdAndUpdate(studentId, {profilePicture: profilePictureUrl})
        return res.json(updatedUser)
    }catch (e) {
        console.error('Error uploading:', e);
        res.status(500).json({ message: 'Internal Server Error', error: e.message });
    }

})

module.exports = {updateStudent}