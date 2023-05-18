const shortid = require('shortid');
const fs = require('fs');
const destinations = require('../../places.json');

function getDataFromJSON() {
    const data = fs.readFileSync('../../places.json');
    const jsonData = JSON.parse(data);
    return jsonData;
}
function getRandomDestination() {
  const randomIndex = Math.floor(Math.random() * destinations.length);
  return destinations[randomIndex];
}
module.exports = {
    getRandomDestination
};
