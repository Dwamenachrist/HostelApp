const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Configuration
cloudinary.config({ 
    cloud_name: process.env.Cloud_name, 
    api_key: process.env.API_Key, 
    api_secret: process.env.API_secret
});

const cloudinaryUploadImg = async (fileToUpload) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(fileToUpload, { resource_type: "auto" }, (error, result) => {
            if (error) {
                console.error("Upload error:", error);
                return reject(error);
            }
            if (!result) {
                console.error("Result is undefined");
                return reject(new Error("Upload failed: Result is undefined"));
            }
            console.log("Upload result:", result);
            resolve(result.secure_url);
            
        });
    });
}

module.exports = cloudinaryUploadImg;