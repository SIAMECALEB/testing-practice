import { capitalize } from '../src/capitalize.js';

test('capitalizes the first character', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('returns empty string for non-string input', () => {
  expect(capitalize(123)).toBe('');
});
