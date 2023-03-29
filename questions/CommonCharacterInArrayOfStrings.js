/*
Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

Eg:
Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
*/

function commonChars(words) {
  const benchMarkWordChars = words.shift().split("");
  const result = [];
  for (let i = 0; i < benchMarkWordChars.length; i++) {
    if (words.every((word) => word.includes(benchMarkWordChars[i]))) {
      result.push(benchMarkWordChars[i]);
      words = words.map((word) => word.replace(benchMarkWordChars[i], ""));
    }
  }

  return result;
}

console.log(commonChars(["cool", "lock", "cook"]));

// Output: ['c', 'o']
