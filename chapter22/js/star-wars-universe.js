fetch("https://swapi.co/api/planets/")
.then(response => response.json())
.then(planets => {
  // Creates an array with 10 planet objects
  const planetList = [];
  for (let i = 0; i < 10; i++) {
    planetList.push(planets.results[i]);
  }
  // Creates a list of links of the planets
  planetList.forEach((planet, index) => {
    const linkElement = document.createElement("a");
    const name = planet.name;
    linkElement.href = name.toLowerCase();
    linkElement.id = index;
    linkElement.name = name;
    linkElement.textContent = `${index + 1}`;
    document.getElementById("links").appendChild(linkElement);
    const dashElement = document.createElement("span");
    dashElement.textContent = " | "
    document.getElementById("links").appendChild(dashElement);
  });
  // Adds triple dots at the end of the links list
  const tipleDotsElement = document.createElement("span");
  tipleDotsElement.textContent = " ...";
  document.getElementById("links").appendChild(tipleDotsElement);

  // Shows the planet's link info
  document.getElementById("links").addEventListener("click", e => {
    document.getElementById("infos").innerHTML = "";
    const planetNameElement = document.createElement("h3");
    planetNameElement.textContent = e.target.name;
    document.getElementById("infos").appendChild(planetNameElement);

    const planetInfoElement = document.createElement("p");
    planetInfoElement.textContent = `Climate: ${planetList[e.target.id].climate}. Population: ${planetList[e.target.id].population}. Appears in ${planetList[e.target.id].films.length} movie(s).`
    document.getElementById("infos").appendChild(planetInfoElement);
    e.preventDefault();
  })
})
.catch(err => {
  console.error(err.message);
});