const { sum, divide, multiply } = require('../src/math');

test('sum works', () => {
  expect(sum(2, 3)).toBe(5);
});

test('divide works', () => {
  expect(divide(10, 2)).toBe(5);
});

test('divide by zero throws error', () => {
  expect(() => divide(10, 0)).toThrow('Division by zero');
});

test('multiply works', () => {
  expect(multiply(4, 5)).toBe(20);
});