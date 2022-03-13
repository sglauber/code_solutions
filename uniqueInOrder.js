/*
unique_in_order takes as argument a sequence and returns a list of items without any elements with the same value 
next to each otherpreserving the original order of elements.
*/
var uniqueInOrder = function (iterable) {
  const arrAux = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] != iterable[i + 1]) {
      arrAux.push(iterable[i]);
    }
  }
  return arrAux;
};

// expect AAAABBBCCDAABBB to be: ['A','B','C','D','A','B']
// expect 11222343321000 to be: ['1', '2', '3',  '4', '3', '2',  '1', '0']
console.log(uniqueInOrder("11222343321000"));
