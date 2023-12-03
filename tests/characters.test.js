const { getCharacters } = require('../utils/api.js');
const { expect } = require('chai');

describe('Star Wars Characters Test', () => {
  it('should retrieve a list of all Star Wars characters', async () => {
    const response = await getCharacters();
    expect(response.status).to.equal(200);
    expect(response.data.results).to.be.an('array').that.is.not.empty;
  });
});

