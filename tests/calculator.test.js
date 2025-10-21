import { calculator } from '../src/calculator.js';

test('adds numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('subtracts numbers', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test('multiplies numbers', () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});

test('divides numbers', () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

test('handles divide by zero', () => {
  expect(calculator.divide(5, 0)).toBe('Error: divide by zero');
});
