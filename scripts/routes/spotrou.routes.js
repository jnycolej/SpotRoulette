const express = require('express');
const router = express.Router();

const controllers = require('../controllers/spotrou.controllers');

router.get('/random-destination', controllers.getRandomDestination);

module.exports = router;

