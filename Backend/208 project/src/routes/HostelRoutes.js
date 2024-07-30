const express = require('express');
const router = express.Router();
const {createHostel} = require('../controllers/HostelControllers/CreateHostel');
const {getHostel} = require('../controllers/HostelControllers/GetHostel');

router.post('/create-hostel', createHostel);
router.get('/get-hostel', getHostel);

module.exports = router;