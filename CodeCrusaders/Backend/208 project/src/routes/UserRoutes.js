const express = require('express');
const router = express.Router();
const {CreateUser} = require('../controllers/Create_User');
const {loginUser} = require('../controllers/LoginUser');
router.post('/register', CreateUser);
router.post('/login', loginUser);
module.exports = router