// https://www.hackerrank.com/challenges/arrays-ds/problem

function reverseArray(a) {
  let aux;
  for(let i = 0; i < a.length / 2; i++){
    aux = a[i];
    a[i] = a[a.length - i - 1];
    a[a.length - i - 1] = aux;
  }
  return a;
}