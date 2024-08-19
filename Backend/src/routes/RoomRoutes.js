const express = require('express');

const { bookRoom } = require('../controllers/Booking.controller');
const { authMiddleware, requireRole } = require('../Middleware/authmiddleware');

const router = express.Router();


router.post('/book-room/:id', authMiddleware, requireRole(['student']), bookRoom);

module.exports = router;