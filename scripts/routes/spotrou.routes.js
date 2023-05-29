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
    //const destination = await getDataFromJSON(id);
    //const destination = await getRandomDestination(id);
    const destination = getDataFromJSON(id);
    console.log(destination);
    res.render('more-info', { destination: destination });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/categoryList', async (req, res) => {
  const category = req.query.category;

  try {
    const data = await getDataFromJSON(); // Assuming getDataFromJSON returns the JSON data
    const filteredData = data.filter(item => item.category === category);

    res.render('list', { category, data: filteredData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
