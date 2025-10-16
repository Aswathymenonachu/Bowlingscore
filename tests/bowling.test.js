const { calculateBowlingTotal } = require("../src/bowling");

test("calculates mixed frames", () => {
  expect(calculateBowlingTotal([[5,3], [10], [4,6]])).toBe(38);
});

test("calculates all open frames", () => {
  expect(calculateBowlingTotal([[3,4], [2,5], [1,6]])).toBe(21);
});

test("handles all strikes", () => {
  const perfect = Array.from({ length: 9 }, () => [10]).concat([[10,10,10]]);
  expect(calculateBowlingTotal(perfect)).toBe(300);
});


