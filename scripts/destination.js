async function getRandomDestination() {
    const radioButton = document.querySelector('input[name="optradio"]:checked');
    const category = radioButton ? radioButton.value : '';

    const url = `/random-destination?category=${encodeURIComponent(category)}`;
    console.log(url);
    const response = await fetch(url);
    const destination = await response.json();
    displayDestination(destination);
  }

  function displayDestination(destination) {
    const container = document.getElementById('destination-container');

    container.innerHTML = `
        <br>
        <h2>${destination.name}</h2>
        <p><strong>Type:</strong> ${destination.category}</p>
        <p><strong>Location:</strong> ${destination.neighborhood}</p>
        <p><strong>Description:</strong> ${destination.description}</p>
        <a href="/destination/${destination.id}" class="btn btn-primary">View More Info</a>
      `;
  }

  function viewMoreInfo(destinationId){
    window.location.href= `\destination/${destinationId}`;
  }