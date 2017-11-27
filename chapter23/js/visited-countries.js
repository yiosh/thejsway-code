// Create an array containing two objects
const myVisitedCountries = 
  {
    name: "Josue Guerrero",
    countries: [
      {
        name: "Netherlands",
        year: 1999
      },
      {
        name: "United States of America",
        year: 1999
      },
      {
        name: "Venezuela",
        year: 1999
      },
      {
        name: "Kuwait",
        year: 2000
      },
      {
        name: "India",
        year: 2000
      },
      {
        name: "Sri Lanka",
        year: 2002
      },
      {
        name: "India",
        year: 2002
      },
      {
        name: "Spain",
        year: 2003
      },
      {
        name: "England",
        year: 2004
      },
      {
        name: "Italy",
        year: 2010
      }
  ]
  };

// Send this array as JSON data to the server
fetch("http://localhost:3000/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(myVisitedCountries)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });