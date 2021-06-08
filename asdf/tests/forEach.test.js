const { expect } = require('chai');
const { sum, copyArrayItems } = require('../forEach.js');

describe('forEach', function () {
  it('should return correct sum', function () {
    expect(sum([1, 2, 3, 4, 5])).to.be.equal(15);
  });

  it('should return correct array', function () {
    expect(copyArrayItems([1, 2, 3, 4, 5])).to.be.eql([1, 2, 3, 4, 5]);
  });
});
