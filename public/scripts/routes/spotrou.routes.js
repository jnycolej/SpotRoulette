const express = require('express');
const router = express.Router();

//const controllers = require('../controllers/spotrou.controllers');
const { getDataFromJSON, getDataFromJSONFull } = require('../models/spotrou.model');
const { getRandomDestination, getList} = require('../destinationUtils');

//router.get('/random-destination', controllers.getRandomDestination);
router.get('/random-destination', (req, res) => {
  const category = req.query.category;
  const randomDestination = getRandomDestination(category);
  res.json(randomDestination);
})
router.get('/destination/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const destination = getDataFromJSON(id);
    //console.log(destination);
    res.render('more-info', { destination: destination });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/categoryList', async (req, res) => {
  try {
    const data = getDataFromJSONFull(); // Assuming getDataFromJSON returns the JSON data
    const category = req.query.category;
    const list = getList(category);
    console.log(category);
    console.log(list);
    res.render('categoryList', {category, list});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
