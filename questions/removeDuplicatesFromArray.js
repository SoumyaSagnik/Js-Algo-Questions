// ! Remove duplicates from an array

const originalArray = [1, 2, 1, 1, 2, 1, 3, 5, 9, 3, 1];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log("Remove Duplicates from Array");
console.log(`Original array: ${originalArray}`);
console.log(`Result: ${removeDuplicates(originalArray)}`);
console.log("-------------------------------");
