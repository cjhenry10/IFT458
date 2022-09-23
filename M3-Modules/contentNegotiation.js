import fetch from 'node-fetch';

const query = 'https://swapi.dev/api/people/1';

fetch(query, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/xml',
    accept: 'application/json',
    'User-Agent': '*',
  },
})
  .then((response) => {
    console.log(`response = ${response}`);
    return response.text();
  })
  .then((xml) => {
    console.log(`XML = ${xml}`);
  })
  .catch((error) => {
    console.error('Error: ', error);
  });
