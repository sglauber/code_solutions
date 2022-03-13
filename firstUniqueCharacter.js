/**
 * @param {string} s
 * @return {number}
 */
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

const s = "lleetccoodde";
console.log("Char pos:", firstUniqChar(s));
