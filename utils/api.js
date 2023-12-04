const axios = require('axios');

// API endpoint configuration
const endpoints = {
  people: "https://swapi.dev/api/people/",
  films: "https://swapi.dev/api/films/",
};

// Utility function to make a generic API request
async function makeApiRequest(endpoint) {
  return await axios.get(endpoint);
}

async function getCharacters() {
  return await makeApiRequest(endpoints.people);
}

async function getFilms() {
  return await makeApiRequest(endpoints.films);
}

module.exports = {
  getCharacters,
  getFilms,
};

