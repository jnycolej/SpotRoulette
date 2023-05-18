const model = require('../models/spotrou.model');

function getRandomDestination(req, res) {
  const randomDestination = model.getRandomDestination();
  res.json(randomDestination);
}

module.exports = {
  getRandomDestination
};
