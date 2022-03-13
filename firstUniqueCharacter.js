/**
 * @param {string} s
 * @return {number}
 */

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
var firstUniqChar = function (s) {
  const obj = {};
  [...s].forEach((el) => (obj[el] ? obj[el]++ : (obj[el] = 1)));
  for (const el in obj) {
    if (obj[el] === 1) {
      return [...s].indexOf(el);
    }
  }
  return -1;
};

// expect lleetccoodde to return index 4;
const s = "lleetccoodde";
console.log("Char pos:", firstUniqChar(s));
