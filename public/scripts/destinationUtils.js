const places = require('../../places.json');

function getRandomDestination(category) {
  const filteredDestinations = places.filter(destination => destination.category === category);
  const randomIndex = Math.floor(Math.random() * filteredDestinations.length);
  const randomDestination = filteredDestinations[randomIndex];
  return randomDestination;
}
function getList(category) {
  const filteredList = places.filter(destination => destination.category === category);
  return filteredList;
}

module.exports = {
  getRandomDestination,
  getList
  //getRandomDestinationSpecific
};
