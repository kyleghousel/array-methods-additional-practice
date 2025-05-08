const { expect } = require('chai');
const { capitalizeNames, toCelsius, extractTitles } = require('./map-practice');

describe('capitalizeNames', () => {
  it('capitalizes each name', () => {
    expect(capitalizeNames(['alice', 'bob'])).to.deep.equal(['Alice', 'Bob']);
  });
});

describe('toCelsius', () => {
  it('converts F to C', () => {
    expect(toCelsius([32, 68, 100])).to.deep.equal([0, 20, 38]);
  });
});

describe('extractTitles', () => {
  it('returns book titles only', () => {
    const input = [{ title: 'Book A' }, { title: 'Book B' }];
    expect(extractTitles(input)).to.deep.equal(['Book A', 'Book B']);
  });
});
