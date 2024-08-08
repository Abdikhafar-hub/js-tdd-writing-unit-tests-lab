// src/utils.js

function isPalindrome(word) {
    if (typeof word !== 'string' || word.length === 0) {
      return false;
    }
    
    const cleaned = word.toLowerCase().replace(/[\W_]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
  }
  
  module.exports = { isPalindrome };
  