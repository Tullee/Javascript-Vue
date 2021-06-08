const { expect } = require('chai');
const { double } = require('../map.js');

describe('map', function () {
  it('should return correct array', function () {
    expect(double([1, 2, 3, 4, 5])).to.be.eql([2, 4, 6, 8, 10]);
  });
});