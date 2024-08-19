const express = require('express');
const router = express.Router();
const {SignUpManager, SignUpStudent} = require('../controllers/Create_User');
const {loginManager} = require('../controllers/LoginManager');
const {loginStudent} = require('../controllers/LoginStudent');
const {updateStudent} = require('../controllers/UpdateStudent')
const {productImgResize, uploadPhoto} = require("../Middleware/uploadImages");

router.post('/register-manager', SignUpManager).post('/register-student', SignUpStudent);
router.put('/update-student/:id', uploadPhoto.array("image", 1) ,productImgResize, updateStudent)
router.post('/login-manager', loginManager);
router.post('/login-student', loginStudent);

module.exports = router