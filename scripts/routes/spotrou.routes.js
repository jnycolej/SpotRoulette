const express = require('express');
const router = express.Router();

const controllers = require('../controllers/spotrou.controllers');
const { getRandomDestination, getDataFromJSON } = require('../models/spotrou.model');

router.get('/random-destination', controllers.getRandomDestination);
router.get('/destination/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const destination = await getDataFromJSON(id);
    res.render('index', { destination });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
