const { expect } = require('chai');
const { sum, join, flattenArray } = require('../reduce.js');

describe('reduce', function () {
  it('should return correct sum', function () {
    expect(sum([1, 2, 3, 4, 5])).to.be.equal(15);
  });

  it('should return correct string', function () {
    expect(join(['first', 'second', 'third'], ', ')).to.be.equal('first, second, third');
  });

  it('should return the correct array', function () {
    expect(
      flattenArray([
        [1, 2],
        [3, 4],
        [5, 6],
      ])
    ).to.be.eql([1, 2, 3, 4, 5, 6]);
  });
});
