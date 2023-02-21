const string1 = "apple";
const string2 = "Madam";

function isPalindrome(string) {
  string = string.toLowerCase();
  return string === string.split("").reverse().toString().replaceAll(",", "")
    ? true
    : false;
}

console.log("Palindrome");
console.log("String1:", string1, "String2:", string2);
console.log(isPalindrome(string1));
console.log(isPalindrome(string2));
console.log("-------------------------------");
