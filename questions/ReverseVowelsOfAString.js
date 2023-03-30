/*
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Input: s = "hello"
Output: "holle"

Input: s = "leetcode"
Output: "leotcede"
*/

const s = "aA";

function reverseVowels(s) {
    const arr = s.split("");
    let left = 0;
    let right = s.length - 1;
    let temp = '';

    while (left < right) {
        if (arr[left] === 'a' || arr[left] === 'e' || arr[left] === 'i' || arr[left] === 'o' || arr[left] === 'u' || arr[left] === 'A' || arr[left] === 'E' || arr[left] === 'I' || arr[left] === 'O' || arr[left] === 'U') {
            if (arr[right] === 'a' || arr[right] === 'e' || arr[right] === 'i' || arr[right] === 'o' || arr[right] === 'u' || arr[right] === 'A' || arr[right] === 'E' || arr[right] === 'I' || arr[right] === 'O' || arr[right] === 'U') {
                temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++;
                right--;
            } else {
                right--;
            }
        } else if (arr[right] === 'a' || arr[right] === 'e' || arr[right] === 'i' || arr[right] === 'o' || arr[right] === 'u' || 'A' || arr[right] === 'E' || arr[right] === 'I' || arr[right] === 'O' || arr[right] === 'U') {
            if (!(arr[left] === 'a' || arr[left] === 'e' || arr[left] === 'i' || arr[left] === 'o' || arr[left] === 'u' || arr[left] === 'A' || arr[left] === 'E' || arr[left] === 'I' || arr[left] === 'O' || arr[left] === 'U')) {
                left++;
            }
        } else {
            left++;
            right--;
        }
    }

    return arr.join("");
}

console.log(reverseVowels(s));

// Output: Aa