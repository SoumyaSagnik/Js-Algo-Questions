let a = 0;
let b = 1;
const recursiveAns = [];

// * Iterative approach
function iterativeFibonacci(terms) {
  const iterativeAns = [];
  let c = 0;
  for (let i = 0; i < terms; i++) {
    iterativeAns.push(a);
    c = a + b;
    a = b;
    b = c;
  }
  return iterativeAns;
}

console.log("Fibonacci for 10 terms");
console.log("iterative", iterativeFibonacci(10));

// * Recursive Approach
function recursiveFibonacci(terms) {
  const recursiveAns = [];

  function recFib(a, b, index) {
    if (index === terms) return;
    recursiveAns.push(a);
    recFib(b, a + b, ++index);
  }
  recFib(0, 1, 0);
  return recursiveAns;
}

console.log("recursive", recursiveFibonacci(10));
console.log("-------------------------------");
