const a = [4, 2, 9, 6, 10, -2, 20, 33, 1, 55, 54, 69, 0];
console.log("Original array:", a);

// *Hero Approach
const lowest = Math.min(...a);
console.log("Approach 1:", lowest);

// *Basic Approach
function lowestArrayElement(array) {
  let min = array[0];
  array.forEach((element) => {
    if (element < min) min = element;
  });
  return min;
}

console.log("Approach 2:", lowestArrayElement(a));
console.log("-------------------------------");
