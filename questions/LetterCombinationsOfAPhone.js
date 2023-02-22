// ? Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Mapping: 2-abc, 3-def, 4-ghi, 5-jkl, 6-mno, 7-pqrs, 8-tuv, 9-wxyz.

// * Example1: "23"
// * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// * Example2: "2"
// * Output: ["a","b","c"]

// ! Constraints: 0 <= digits.length <= 4

let letterCombinations = function (digits) {
  if (!digits.length) return [];

  let map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let result = [];

  function permute(string, index) {
    if (index === digits.length) {
      result.push(string);
      return;
    }

    for (let x of map[digits[index]]) {
      permute(string + x, index + 1);
    }
  }
  permute("", 0);
  return result;
};

console.log("Letter combinations of a phone");
console.log(letterCombinations("23"));
console.log("-------------------------------");
