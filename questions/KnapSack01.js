// * Problem Statement: You've a knapsack of fixed weight.
// * You're given 2 arrays, weights & value, and a fixed weight.
// * Find the max value you can get by putting items in the knapsack.
// * Weight is not fractional. It's either a 1 0r 0.
// * You've got only one piece of an item.

// ? Example: W = 12. w = [5, 4, 7, 3]. v = [5, 7, 9, 4].
// ! Output: 16

function recursiceKnapsack01(w, v, W) {
  function knapsack(w, v, W, index) {
    if (W === 0 || index === -1) return 0;
    if (w[index] <= W)
      return Math.max(
        v[index] + knapsack(w, v, W - w[index], index - 1),
        knapsack(w, v, W, index - 1)
      );
    return knapsack(w, v, W, index - 1);
  }

  const output = knapsack(w, v, W, w.length - 1);
  return output;
}

/* 
    Exit condition: if index is negative or Weight (Capacity of bag to accomodate more items) becomes zero.

    If wt of item is less than or equal to total capacity of bag then we have two choices.
    Choice one: include the item.
    Choice two: exclude the item.
    
    If we choose to include the item, we've to include the item's value in return and decrease the item's weight from total capacity and decrease the index.
    If we choose not to include the item, we simply decrease the index.

    If wt of the item is greater than total capacity, we can't include it and hence we simply decrease the index by 1.
*/

console.log("Knapsack 01 recursicve");
console.log(recursiceKnapsack01([5, 4, 7, 3], [5, 7, 9, 4], 12));
console.log(recursiceKnapsack01([4, 5, 1], [1, 2, 3], 4));

function memoizedKnapsack01(w, v, W) {
  const dpMatrix = Array.from({ length: w.length + 1 }, () =>
    Array(W + 1).fill(-1)
  );

  function knapsack(w, v, W, index) {
    if (W === 0 || index === -1) return 0;
    if (dpMatrix[index + 1][W] !== -1) return dpMatrix[index + 1][W];
    if (w[index] <= W)
      return (dpMatrix[index + 1][W] = Math.max(
        v[index] + knapsack(w, v, W - w[index], index - 1),
        knapsack(w, v, W, index - 1)
      ));
    return (dpMatrix[index + 1][W] = knapsack(w, v, W, index - 1));
  }

  const output = knapsack(w, v, W, w.length - 1);
  return output;
}

/*
We're simply storing the values in a matrix so that we don't have to calculate the already calculated values again. This is the main concept behind memoization.
*/

console.log("Knapsack 01 memoized");
console.log(memoizedKnapsack01([5, 4, 7, 3], [5, 7, 9, 4], 12));
console.log(memoizedKnapsack01([4, 5, 1], [1, 2, 3], 4));
console.log("-------------------------------");
