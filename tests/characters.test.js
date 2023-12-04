const { getCharacters } = require('../utils/api.js');
const { expect } = require('chai');
const axios = require('axios');

describe('Star Wars Characters Test', () => {
  it('should retrieve a list of all Star Wars characters', async () => {
    try {
      const response = await getCharacters();
      
      // Verify that the response status is 200
      expect(response.status).to.equal(200);

      // Verify that at least one character is returned
      expect(response.data.results).to.be.an('array').that.is.not.empty;
    } catch (error) {
      console.error('An error occurred while fetching characters:', error.message);
      throw error;
    }
  });

  it('should retrieve details for a specific Star Wars character', async () => {
    // Specify the name of the character (e.g., Luke Skywalker)
    const characterName = 'Luke Skywalker';

    try {
      // Make a request to the Star Wars API for the specific character
      const response = await axios.get(`https://swapi.dev/api/people/?search=${encodeURIComponent(characterName)}`);

      // Verify that the response status is 200
      expect(response.status).to.equal(200);

      // Verify that only one result is returned
      expect(response.data.count).to.equal(1);

      // Verify that the returned character details match the expected details
      const character = response.data.results[0];
      expect(character.name).to.equal(characterName);
      expect(character).to.have.property('height', '172');
      expect(character).to.have.property('hair_color', 'blond');
    } catch (error) {
      console.error(`An error occurred while fetching details for ${characterName}:`, error.message);
      throw error;
    }
  });
});



