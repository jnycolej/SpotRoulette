const shortid = require('shortid');
const fs = require('fs');
const { getRandomDestination: getRandomDestinationFromUtils } = require('../destinationUtils');
const path = require('path');

function getDataFromJSON() {
    const filePath = path.resolve(__dirname, '../../places.json');
    const data = fs.readFileSync(filePath);
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
