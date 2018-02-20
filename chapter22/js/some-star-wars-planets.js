const planetsArray = [];

fetch('https://swapi.co/api/planets/')
  .then(response => response.json())
  .then(planets => {
    // Creat a DocumentFragment into which append all the planet links
    const fragment = document.createDocumentFragment();

    // Create the planet link list and append to the documentFragment
    planets.results.forEach((planet, index) => {
      const linkElement = document.createElement('a');
      linkElement.textContent = index + 1;
      linkElement.href = '#';

      const separatorElement = document.createElement('p');
      separatorElement.textContent = '|';
      planetsArray.push(planet);

      fragment.appendChild(linkElement);
      fragment.appendChild(separatorElement);
    });
    const continueElement = document.createElement('p');
    continueElement.textContent = '...';
    fragment.appendChild(continueElement);

    // When the list is ready append the fragment to the DOM
    document.getElementById('links').appendChild(fragment);
  })
  .catch(err => {
    console.error(err.message);
  });

// Show the planet from the link list
document.getElementById('links').addEventListener('click', event => {
  if (event.target.tagName === 'A') {
    const containerElement = document.getElementById('infos');
    containerElement.textContent = '';

    const planetElement = planetsArray[event.target.textContent - 1];

    const nameElement = document.createElement('h2');
    nameElement.textContent = planetElement.name;

    const infoElement = document.createElement('p');
    infoElement.textContent = `Climate: ${planetElement.climate}. Population: ${planetElement.population}. Appears in ${
      planetElement.films.length
    } movie(s).`;

    containerElement.appendChild(nameElement);
    containerElement.appendChild(infoElement);
  }
});
