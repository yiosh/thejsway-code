fetch('https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json')
  .then(response => response.json()) // Access and return response's JSON content
  .then(paintings => {
    const fragment = document.createDocumentFragment();
    // Iterate on the paintings array
    paintings.forEach(painting => {
      const tableRow = document.createElement('tr');
      const paintingName = document.createElement('td');
      const paintingYear = document.createElement('td');
      const paintingArtist = document.createElement('td');

      // Fill the table with the data from the response
      paintingName.innerText = painting.name;
      tableRow.appendChild(paintingName);
      paintingYear.innerText = painting.year;
      tableRow.appendChild(paintingYear);
      paintingArtist.innerText = painting.artist;
      tableRow.appendChild(paintingArtist);
      fragment.appendChild(tableRow);
    });
    document.getElementById('paintings').appendChild(fragment);
  })
  .catch(err => {
    console.error(err.message);
  });
