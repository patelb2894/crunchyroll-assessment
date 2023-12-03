const axios = require('axios');

// API endpoint configuration
const endpoints = {
  people: "https://swapi.dev/api/people/",
  planets: "https://swapi.dev/api/planets/",
  films: "https://swapi.dev/api/films/",
  species: "https://swapi.dev/api/species/",
  vehicles: "https://swapi.dev/api/vehicles/",
  starships: "https://swapi.dev/api/starships/",
};

// Utility function to make a generic API request
async function makeApiRequest(endpoint) {
  return await axios.get(endpoint);
}

async function getCharacters() {
  return await makeApiRequest(endpoints.people);
}

async function getPlanets() {
  return await makeApiRequest(endpoints.planets);
}

async function getFilms() {
  return await makeApiRequest(endpoints.films);
}

async function getSpecies() {
  return await makeApiRequest(endpoints.species);
}

async function getVehicles() {
  return await makeApiRequest(endpoints.vehicles);
}

async function getStarships() {
  return await makeApiRequest(endpoints.starships);
}

// Add more utility functions as needed

module.exports = {
  getCharacters,
  getPlanets,
  getFilms,
  getSpecies,
  getVehicles,
  getStarships,
  // Export other utility functions
};

