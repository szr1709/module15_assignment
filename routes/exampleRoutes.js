const express = require('express');
const router = express.Router();
const { helloWorld } = require('../controllers/exampleController');

router.get('/hello', helloWorld);

module.exports = router;
