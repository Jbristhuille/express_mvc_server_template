const express = require('express');
const router = express.Router();

const gifsController = require('../controllers/gifs.controller');

router.get('/', gifsController.getAll);

module.exports = router;