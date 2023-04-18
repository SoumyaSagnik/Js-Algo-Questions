/*
You have n coins and you want to build a staircase with these coins.
The staircase consists of k rows where the ith row has exactly i coins.
The last row of the staircase may be incomplete.

eg: n = 5         o/p: 2
n = 8             o/p: 3 
*/

/*
We are given sum (s) here, we have to find n.
s = n * (n + 1) / 2
n = -1 + sqrt(1 + 8s) / 2
*/

const arrangeCoins = function (n) {
  return Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);
};

console.log(arrangeCoins(20)); // 5
