fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
)
  .then(response => response.json())
  .then(paintings => {
    paintings.forEach(painting => {

      const tableRowElement = document.createElement("tr")
      const nameDataElement = document.createElement("td");
      const yearDataElement = document.createElement("td");
      const artistDataElement = document.createElement("td");
      nameDataElement.textContent = painting.name;
      yearDataElement.textContent = painting.year;
      artistDataElement.textContent = painting.artist;
      
      tableRowElement.appendChild(nameDataElement);
      tableRowElement.appendChild(yearDataElement);
      tableRowElement.appendChild(artistDataElement);
      document.getElementById("paintings").appendChild(tableRowElement);

    })
  })
  .catch(err => {
    console.error(err.message);
  });