/*
    Find the gcd of the maximum and minimum element in an array
*/

function findGCD(nums) {
  const max = Math.max(...nums);
  const min = Math.min(...nums);

  function gcd(a, b) {
    if (a === 0) return b;
    return gcd(b % a, a);
  }

  return gcd(min, max);
}

console.log(findGCD([7, 5, 6, 8, 3])); // 2
