const { expect } = require('chai');
const {
  firstPerfectScore,
  firstOverdueTask,
  findProductBySKU,
  firstPG13
} = require('./find-practice');

describe('Array.find Practice Exercises', () => {
  describe('firstPerfectScore', () => {
    it('returns name of student with perfect score', () => {
      const students = [
        { name: "Alice", score: 87 },
        { name: "Bob", score: 92 },
        { name: "Charlie", score: 100 },
        { name: "Dana", score: 78 }
      ];
      expect(firstPerfectScore(students)).to.equal("Charlie");
    });

    it('returns undefined if no perfect score', () => {
      const students = [
        { name: "Alice", score: 87 },
        { name: "Bob", score: 92 },
        { name: "Dana", score: 78 }
      ];
      expect(firstPerfectScore(students)).to.equal(undefined);
    });
  });

  describe('firstOverdueTask', () => {
    it('returns the title of the first overdue task', () => {
      const tasks = [
        { title: "Buy milk", due: false },
        { title: "Finish homework", due: true },
        { title: "Call mom", due: false }
      ];
      expect(firstOverdueTask(tasks)).to.equal("Finish homework");
    });

    it('returns undefined if no overdue tasks', () => {
      const tasks = [
        { title: "Buy milk", due: false },
        { title: "Call mom", due: false }
      ];
      expect(firstOverdueTask(tasks)).to.equal(undefined);
    });
  });

  describe('findProductBySKU', () => {
    const products = [
      { sku: "X123", name: "Monitor" },
      { sku: "Y456", name: "Keyboard" },
      { sku: "Z789", name: "Mouse" }
    ];

    it('returns name of product with matching SKU', () => {
      expect(findProductBySKU(products, "Y456")).to.equal("Keyboard");
    });

    it('returns undefined if SKU not found', () => {
      expect(findProductBySKU(products, "A000")).to.equal(undefined);
    });
  });

  describe('firstPG13', () => {
    const movies = [
      { title: "Toy Story", rating: "G" },
      { title: "The Batman", rating: "PG-13" },
      { title: "Deadpool", rating: "R" }
    ];

    it('returns the title of the first PG-13 movie', () => {
      expect(firstPG13(movies)).to.equal("The Batman");
    });

    it('returns undefined if no PG-13 movies', () => {
      const kidsMovies = [
        { title: "Toy Story", rating: "G" },
        { title: "Finding Nemo", rating: "G" }
      ];
      expect(firstPG13(kidsMovies)).to.equal(undefined);
    });
  });
});
