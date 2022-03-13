function findOdd(A) {
  const numbers = {};
  A.forEach(el => numbers[el] ? numbers[el]++ : numbers[el] = 1);
  for (const el in numbers) {
    if (numbers[el] % 2 !== 0) {
      return +el;
    }
  }
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));

// expect [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5] to return 5;
// expect [1,1,2,-2,5,2,4,4,-1,-2,5] to return -1
// expect [20,1,1,2,2,3,3,5,5,4,20,4,5] to return 5
// expect [10] to return 10
// expect [1,1,1,1,1,1,10,1,1,1,1] to return 10
// expect [5,4,3,2,1,5,4,3,2,10,10] to return 1