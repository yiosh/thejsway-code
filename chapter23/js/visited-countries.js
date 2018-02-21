const travels = {
  name: 'Josue D. Guerrero B.',
  countries: [
    {
      name: 'Netherlands',
      year: 2003,
    },
    {
      name: 'United States',
      year: 2002,
    },
    {
      name: 'Venezuela',
      year: 2017,
    },
    {
      name: 'Kuwait',
      year: 2001,
    },
    {
      name: 'Italy',
      year: 2018,
    },
    {
      name: 'Belgium',
      year: 2000,
    },
    {
      name: 'Spain',
      year: 2010,
    },
    {
      name: 'India',
      year: 2006,
    },
    {
      name: 'Thailand',
      year: 2004,
    },
    {
      name: 'Sri Lanka',
      year: 2004,
    },
    {
      name: 'France',
      year: 2017,
    },
    {
      name: 'England',
      year: 2003,
    },
  ],
};

fetch('https://thejsway-server.herokuapp.com/api/countries', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(travels),
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });
