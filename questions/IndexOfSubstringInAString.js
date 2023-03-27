// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Eg: Input: haystack = "sadbutsad", needle = "sad"     Output: 0
// haystack and needle consist of only lowercase English characters.

function needleInAHaystack(haystack, needle) {
  if (!haystack.includes(needle)) return -1;
  const needleLength = needle.length;
  const haystackArray = haystack.split("");
  const needleFirstChar = needle.split("")[0];

  for (let i = 0; i < haystackArray.length; i++) {
    if (haystackArray[i] === needleFirstChar) {
      if (haystack.substring(i, i + needleLength) === needle) return i;
    }
  }

  return -1;
}

console.log(needleInAHaystack("thisisneedleinahaystack", "needle"));

// Output: 6
