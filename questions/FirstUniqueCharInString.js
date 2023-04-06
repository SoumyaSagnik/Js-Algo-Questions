/*
    Return index of the first unique character in a string.
    If none exists, return -1.

    Eg: bird  Output: 0
    Eg: aaa   Output: 0
*/

const s = "amazon";

function firstUniqueChar(s) {
  for (let i = 0; i < s.length; i++) {
    if (
      !(
        s.substring(0, i).includes(s.charAt(i)) ||
        s.substring(i + 1).includes(s.charAt(i))
      )
    )
      return i;
  }

  return -1;
}

console.log(firstUniqueChar(s)); // 1
