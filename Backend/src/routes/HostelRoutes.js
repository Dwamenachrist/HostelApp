const express = require('express');
const router = express.Router();
const {createHostel} = require('../controllers/HostelControllers/CreateHostel');
const {getHostel} = require('../controllers/HostelControllers/GetHostel');
// const {updateHostel} = require('../controllers/HostelControllers/UpdateHostel');
const {productImgResize, uploadPhoto} = require("../Middleware/uploadImages");
const { createRoom } = require('../controllers/Create_Room');
const { authMiddleware, requireRole } = require('../Middleware/authmiddleware');


router.post('/create-hostel/:id', authMiddleware, requireRole(['manager']), uploadPhoto.array("image", 1), productImgResize, createHostel);
router.post('/create-room/:id', authMiddleware, requireRole(['manager']), uploadPhoto.array("images", 2), productImgResize, createRoom);
router.get('/get-hostels', getHostel);
//router.patch('/update-hostel/:id', updateHostel);


module.exports = router;