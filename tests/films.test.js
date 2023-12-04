const axios = require('axios');
const { expect } = require('chai');
const { getFilms, getFilm } = require('../utils/api-utils');
const {filmData} = require('../utils/constants.cjs')

describe('Star Wars Films Test', () => {
  it('should retrieve a list of all Star Wars films', async () => {
    try {
      const response = await getFilms();

      // Verify that the response status is 200
      expect(response.status).to.equal(200);

      // Verify that at least one film is returned
      expect(response.data.results).to.be.an('array').that.is.not.empty;
    } catch (error) {
      console.error('An error occurred while fetching films:', error.message);
      throw error;
    }
  });

  it('should retrieve details for a specific Star Wars film', async () => {
    try {
      const response = await getFilm(filmData.title);

      // Verify that the response includes the correct film details, and that only one result is returned.
      expect(response.status).to.equal(200);
      expect(response.data.count).to.equal(1);
      const film = response.data.results[0];
      expect(film.title).to.equal(filmData.title);
      expect(film.director).to.equal(filmData.directorName);
      expect(film.producer).to.equal(filmData.producerName);
      expect(film.release_date).to.equal(filmData.releaseDate)
    } catch (error) {
      console.error(`An error occurred while fetching details for ${filmTitle}:`, error.message);
      throw error;
    }
  });
});
