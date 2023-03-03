// ? Given an array of numbers.
// ?  Find two consecutive numbers whose sum equals to a given number.
// ? Return the index of first such number.
// * Eg: arr = [9,4,-2,9,5,0,0,1]. Target sum = 7. Output: 2.

function findTargetSumIndex(arr, sum) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] === sum) return i;
  }
  return -1;
}

console.log("Consecutive first sum", "target: 7");
console.log(
  [9, 4, -2, 9, 5, 0, 0, 1],
  findTargetSumIndex([9, 4, -2, 9, 5, 0, 0, 1], 7)
);
console.log(
  [9, 4, 2, 9, 7, 0, 0, 1],
  findTargetSumIndex([9, 4, 2, 9, 7, 0, 0, 1], 7)
);
console.log(
  [9, 4, 2, 9, 5, 0, 0, 6],
  findTargetSumIndex([9, 4, 2, 9, 5, 0, 0, 7], 7)
);
console.log(
  [9, 4, 2, 9, 5, 0, 0, 1],
  findTargetSumIndex([9, 4, 2, 9, 5, 0, 0, 1], 7)
);
console.log("-------------------------------");
