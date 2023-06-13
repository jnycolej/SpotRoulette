const shortid = require('shortid');
const fs = require('fs');
const { getRandomDestination: getRandomDestinationFromUtils } = require('../destinationUtils');
const path = require('path');

const getDataFromJSONFull = () => {
  const data = require('../../../places.json');
  //console.log(data); // Check if data is correctly retrieved
  return data;
};

function getDataFromJSON(id) {
    const jsonData = require('../../../places.json');
    const destination = jsonData.find((item) => item.id.toString() === id);
    return destination;
}

function getRandomDestination() {
  const jsonData = getDataFromJSON();
  const randomIndex = Math.floor(Math.random() * jsonData.length);
  return jsonData[randomIndex];
}

module.exports = {
    getRandomDestination: getRandomDestinationFromUtils,
    getDataFromJSON,
    getDataFromJSONFull
};
