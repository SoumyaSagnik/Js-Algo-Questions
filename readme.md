# Questions

## [Second Largest Element in Array](#secondLargestElementInArray)

## [Rotate an array k times](#rotateArrayKTimes)

---

# Answers

### <a id="secondLargestElementInArray"></a> Second largest element in array.

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

### <a id="rotateArrayKTimes"></a> Rotate array k times

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
