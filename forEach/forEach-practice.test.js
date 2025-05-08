const { expect } = require('chai');
const { logItems, collectNames, boostScores } = require('./forEach-practice');

describe('collectNames', () => {
  it('pushes all user names into a target array', () => {
    const users = [{ name: 'A' }, { name: 'B' }];
    const output = [];
    collectNames(users, output);
    expect(output).to.deep.equal(['A', 'B']);
  });
});

describe('boostScores', () => {
  it('adds 10 to each student score', () => {
    const students = [{ score: 80 }, { score: 70 }];
    boostScores(students);
    expect(students).to.deep.equal([{ score: 90 }, { score: 80 }]);
  });
});
