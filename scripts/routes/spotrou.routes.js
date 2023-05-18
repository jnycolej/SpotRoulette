var express = require('express');
var router = express.Router();
const fs = require('fs');

const {test, newRoulette, getRoulette} = require('../controllers/spotrou.controllers');

router.get('/test', test);
router.get('/new', newRoulette);
router.get('/:id', getRoulette);

const data = fs.readFileSync('../../places.json');

module.exports = router;

