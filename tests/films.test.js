const axios = require('axios');
const { expect } = require('chai');

describe('Star Wars Films Test', () => {
  it('should retrieve a list of all Star Wars films', async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/films/');

      // Verify that the response status is 200
      expect(response.status).to.equal(200);

      // Verify that at least one film is returned
      expect(response.data.results).to.be.an('array').that.is.not.empty;
      const firstFilm = response.data.results[0];
      expect(firstFilm).to.have.property('title', 'A New Hope');
      expect(firstFilm).to.have.property('director', 'George Lucas');
    } catch (error) {
      console.error('An error occurred while fetching films:', error.message);
      throw error;
    }
  });

  it('should retrieve details for a specific Star Wars film', async () => {
    const filmTitle = 'A New Hope';
    try {
      const response = await axios.get(`https://swapi.dev/api/films/?search=${encodeURIComponent(filmTitle)}`);

      // Verify that the response includes the correct film details, and that only one result is returned.
      expect(response.status).to.equal(200);
      expect(response.data.count).to.equal(1);
      const film = response.data.results[0];
      expect(film.title).to.equal(filmTitle);
    } catch (error) {
      console.error(`An error occurred while fetching details for ${filmTitle}:`, error.message);
      throw error;
    }
  });
});
