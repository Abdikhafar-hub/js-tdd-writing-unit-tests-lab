// src/__tests__/utils.test.js

const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  test('returns true for a palindrome word "racecar"', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('returns false for a non-palindrome word "car"', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  test('returns true for a palindrome word "Mom" with mixed case', () => {
    expect(isPalindrome('Mom')).toBe(true);
  });

  test('returns false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  test('returns true for a single character "a"', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('returns true for a palindrome phrase with spaces and punctuation "A man, a plan, a canal, Panama"', () => {
    expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
  });
});
