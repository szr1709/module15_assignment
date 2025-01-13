const express = require('express');
const router = express.Router();
const { generateToken, postResponse } = require('../controllers/authController');

router.get('/token', generateToken);
router.post('/post', postResponse);

module.exports = router;
