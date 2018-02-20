document.getElementById();

fetch('https://api.github.com/user')
  .then(response => response.json())
  .then(beers => {
    // API returns an array containg only one element: we get it
    const beer = beers[0];
    // Creating DOM element for some beer properties
    const nameElement = document.createElement('h2');
    nameElement.textContent = beer.name;
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = beer.description;
    // Clear previous beer data
    const beerElement = document.getElementById('beer');
    beerElement.innerHTML = '';
    // Add beer info to the page
    beerElement.appendChild(nameElement);
    beerElement.appendChild(descriptionElement);
  })
  .catch(err => {
    console.error(err.message);
  });
