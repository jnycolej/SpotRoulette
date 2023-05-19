const express = require('express');
const router = express.Router();

//const controllers = require('../controllers/spotrou.controllers');
const { getDataFromJSON } = require('../models/spotrou.model');
const { getRandomDestination} = require('../destinationUtils');

//router.get('/random-destination', controllers.getRandomDestination);
router.get('/random-destination', (req, res) => {
  const category = req.query.category;
  const randomDestination = getRandomDestination(category);
  res.json(randomDestination);
})
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
