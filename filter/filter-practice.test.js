const { expect } = require('chai');
const { getPassingStudents, onlyOdds, activeUsers } = require('./filter-practice');

describe('getPassingStudents', () => {
  it('returns students with score >= 70', () => {
    const input = [{ name: 'A', score: 80 }, { name: 'B', score: 60 }];
    expect(getPassingStudents(input)).to.deep.equal([{ name: 'A', score: 80 }]);
  });
});

describe('onlyOdds', () => {
  it('filters out even numbers', () => {
    expect(onlyOdds([1, 2, 3, 4, 5])).to.deep.equal([1, 3, 5]);
  });
});

describe('activeUsers', () => {
  it('returns users with isActive true', () => {
    const input = [
      { name: 'User1', isActive: true },
      { name: 'User2', isActive: false }
    ];
    expect(activeUsers(input)).to.deep.equal([{ name: 'User1', isActive: true }]);
  });
});
