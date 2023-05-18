/*async

async function getRandomDestination() {
    const radioButton = document.querySelector('input[name="optradio"]:checked');
    const category = radioButton ? radioButton.value : '';
    const includeKidFriendly = document.querySelector('input[name="includeKidFriendly"]').checked || false

    const url = `/random-destination?category=${encodeURIComponent(category)}&includeKidFriendly=${includeKidFriendly}`;
    const response = await fetch(url);
    const destination = await response.json();
    displayDestination(destination);
  }

  function displayDestination(destination) {
    const container = document.getElementById('destination-container');

    container.innerHTML = `
        <br>
        <h2>${destination.name}</h2>
        <p><strong>Location:</strong> ${destination.neighborhood}</p>
        <p><strong>Description:</strong> ${destination.description}</p>
        <button class="btn btn-primary" onclick="viewMoreInfo('${destination.id}')">View More Info</button>
    `;
  }

  function viewMoreInfo(destinationId){
    window.location.href= `\destination/${destinationId}`;
  }
  */

/*
  async function getRandomDestination() {
    // Fetch the random destination
    const destination = await fetchRandomDestination();
    displayDestination(destination);
  }

  async function fetchRandomDestination() {
    const type = document.querySelector('input[name="optradio"]:checked').value;
    const isKidFriendly = document.getElementById('kidFriendlyCheckbox').checked;

    const response = await fetch(`/random-destination?type=${type}&kidFriendly=${isKidFriendly}`);
    const destination = await response.json();
    return destination;
  }

  function displayDestination(destination) {
    const container = document.getElementById('destination-container');

    // Clone the destination template and update the content
    const template = document.getElementById('destination-template');
    const destinationInfo = template.content.cloneNode(true);

    destinationInfo.querySelector('h2').textContent = destination.name;
    destinationInfo.querySelector('p:nth-of-type(1)').textContent += ` ${destination.address}`;
    destinationInfo.querySelector('p:nth-of-type(2)').textContent += ` ${destination.description}`;

    // Set the "Learn More" button href to the destination page
    const learnMoreButton = destinationInfo.querySelector('a');
    learnMoreButton.href = `destination.html?id=${destination.id}`;

    // Append the destination info to the container
    container.innerHTML = '';
    container.appendChild(destinationInfo);
  }
  */

// destinations.js

// Event listener for the "Find a Place" button
document.querySelector('.btn-primary').addEventListener('click', getRandomDestination);

async function getRandomDestination() {
  // Fetch the random destination
  const destination = await fetchRandomDestination();
  displayDestination(destination);
}

async function fetchRandomDestination() {
  const type = getSelectedRadioValue('optradio');

  const response = await fetch(`/random-destination?type=${type}`);
  const destination = await response.json();
  return destination;
}

function getSelectedRadioValue(name) {
  const radios = document.getElementsByName(name);
  for (const radio of radios) {
    if (radio.checked) {
      return radio.value;
    }
  }
  return null; // Return null if no radio button is selected
}

function displayDestination(destination) {
  const container = document.getElementById('destination-container');

  // Clone the destination template and update the content
  const template = document.getElementById('destination-template');
  const destinationInfo = template.content.cloneNode(true);

  destinationInfo.querySelector('h2').textContent = destination.name;
  destinationInfo.querySelector('').textContent += ` ${destination.address}`;
  destinationInfo.querySelector('h4').textContent += ` ${destination.description}`;

  // Set the "Learn More" button href to the destination page
  const learnMoreButton = destinationInfo.querySelector('a');
  learnMoreButton.href = `destination.ejs?id=${destination.id}`;

  // Append the destination info to the container
  container.innerHTML = '';
  container.appendChild(destinationInfo);
}
