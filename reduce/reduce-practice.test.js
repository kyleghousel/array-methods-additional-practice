const { expect } = require('chai');
const { totalPrice, totalLetters, fruitCount } = require('./reduce-practice');

describe('totalPrice', () => {
  it('sums item prices', () => {
    const input = [{ price: 5 }, { price: 15 }];
    expect(totalPrice(input)).to.equal(20);
  });
});

describe('totalLetters', () => {
  it('counts all characters', () => {
    expect(totalLetters(['hi', 'hello'])).to.equal(7);
  });
});

describe('fruitCount', () => {
  it('tallies fruit', () => {
    expect(fruitCount(['apple', 'banana', 'apple'])).to.deep.equal({
      apple: 2,
      banana: 1
    });
  });
});
