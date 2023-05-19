const {getRandomDestination: getRandomDestinationFromUtils } = require('../destinationUtils');

function getRandomDestination(req, res) {
  const category = req.query.category;

  const randomDestination = getRandomDestination(category);
  res.json(randomDestination);
};

module.exports = {
  getRandomDestination: getRandomDestinationFromUtils
};
