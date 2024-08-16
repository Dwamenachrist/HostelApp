const multer = require('multer')
const sharp = require('sharp')
const path = require('path')
const fs = require('fs').promises

const multerStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../config/uploads/images'));
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Unsupported file format'), false);
    }
};

const uploadPhoto = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
    limits: { fileSize: 2000000 } // 2 MB limit
});

const productImgResize = async (req, res, next) => {
    if (!req.files) return next();

    await Promise.all(
        req.files.map(async (file) => {
            const outputFileName = `resized-${file.filename}`;
            const outputFilePath = path.join(path.dirname(file.path), outputFileName);

            try {
                await sharp(file.path)
                    .resize(300, 300)
                    .toFormat('jpeg')
                    .jpeg({ quality: 90 })
                    .toFile(outputFilePath);

                // Attempt to remove the original file
                try {
                    await fs.unlink(file.path);
                } catch (unlinkErr) {
                    console.error(`Error removing file: ${file.path}`, unlinkErr);
                }

            } catch (err) {
                console.error(`Error processing file: ${file.path}`, err);
            }
        })
    );

    next();
};

const imgResize = async(req, res, next) => {
    if(!req.files) return next();
    await Promise.all(
        req.files.map(async(file) => {
        await sharp(file.path)
            .resize(300,300)
            .toFormat('jpeg')
            .jpeg({quality:90})
            .toFile(`uploads/${file.filname}`)
        })
    )
    next()
}

module.exports = { uploadPhoto, productImgResize, imgResize }