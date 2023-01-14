// ! Remove duplicates from an array

function removeDuplicates(arr) {
  const b = [...new Set(arr)];
  console.log(b);
}
removeDuplicates([1, 2, 1, 1, 2, 1, 3, 5, 9, 3, 1]);
// output: [1, 2, 3, 5, 9]

console.log("---------------------------------------------------------------");
