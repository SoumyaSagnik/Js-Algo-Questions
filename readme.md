# Questions

## [Second Largest Element in Array](#secondLargestElementInArray)

## [Rotate an array k times](#rotateArrayKTimes)

## [Missing binary from array of binary strings](#missingBinary)

## [Check if an array contains two elemets at different indexes whose sum equals to a given target](#targetSum)

---

# Answers

### <a id="secondLargestElementInArray">Second largest element in array.</a>

**Brute Force** `O(nlogn)`

```javascript
const arr = [23, 35, 1, 10, 34, 1, 35];

function secondLargest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a)[1];
}

console.log(secondLargest(arr)); // 34
```

**Optimized Approach** `O(n)`

```javascript
const arr = [23, 35, 1, 10, 34, 1, 35];

function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(secondLargest(arr)); // 34
```

---

### <a id="rotateArrayKTimes">Rotate array k times.</a>

**Eg: arr = [1,2,3,4,5,6,7], k = 10**

```
1 -> [7,1,2,3,4,5,6]
2 -> [6,7,1,2,3,4,5]
3 -> [5,6,7,1,2,3,4]
4 -> [4,5,6,7,1,2,3]
5 -> [3,4,5,6,7,1,2]
6 -> [2,3,4,5,6,7,1]
7 -> [1,2,3,4,5,6,7]
8 -> [7,1,2,3,4,5,6]
9 -> [6,7,1,2,3,4,5]
10 -> [5,6,7,1,2,3,4]
```

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 10;

function rotateArray(arr, k) {
  if (k === 0) return arr;
  return rotateArray(arr.splice(arr.length - 1, 1).concat(arr), k - 1);
}

console.log(rotateArray(arr, k)); // [5,6,7,1,2,3,4]
```

---

### <a id="missingBinary"> Missing binary from array of binary strings.</a>

_Array consists of binary from 0 to N_
<br>
**Eg: ["0", "01", "10", "11", "101"] &nbsp;&nbsp;&nbsp;&nbsp; Output: "100"**

```javascript
const arr = ["0", "01", "10", "11", "101"];

function missingNumberInBinary(nums) {
  nums = nums.map((num) => parseInt(num, 2)); // binary to decimal
  const arraySum = nums.reduce((total, num) => total + num, 0);
  const missingNumber = (nums.length * (nums.length + 1)) / 2 - arraySum;
  return missingNumber.toString(2); // decimal to binary
}

console.log(missingNumberInBinary(arr)); // "100"
```

---

### <a id="targetSum"> Check if an array has a pair whose sum equals to a given target sum.</a>

**When array is sorted**

```javascript
const arr = [1, 3, 8, 17, 20];

function targetSum(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    if (arr[low] + arr[high] === target) return true;
    else if (arr[low] + arr[high] < target) low++;
    else high--;
  }

  return false;
}

console.log(targetSum(arr, 11)); // true
console.log(targetSum(arr, 17)); // false
```

---

**When array is not sorted**

```javascript
const arr = [4, 8, 1, 3, 9];

function targetSum(arr, target) {
  const complements = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (complements.has(arr[i])) return true;
    else {
      complements.add(target - arr[i]);
    }
  }

  return false;
}

console.log(targetSum(arr, 11)); // true
console.log(targetSum(arr, 18)); // false
```

---
