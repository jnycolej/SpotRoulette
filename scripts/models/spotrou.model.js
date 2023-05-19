const shortid = require('shortid');
const fs = require('fs');
const { getRandomDestination: getRandomDestinationFromUtils } = require('../destinationUtils');

function getDataFromJSON() {
    const data = fs.readFileSync('../../places.json');
    const jsonData = JSON.parse(data);
    return jsonData;
}

function getRandomDestination() {
  const jsonData = getDataFromJSON();
  const randomIndex = Math.floor(Math.random() * jsonData.length);
  return jsonData[randomIndex];
}

module.exports = {
    getRandomDestination: getRandomDestinationFromUtils,
    getDataFromJSON
};
