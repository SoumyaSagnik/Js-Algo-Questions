## [Second Largest Element in Array](#secondLargestElementInArray)

### <a id="secondLargestElementInArray"></a> Second largest element in array.

**Brute Force** O(nlogn)

```javascript
const arr = [23, 35, 1, 10, 34, 1, 35];

function secondLargest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a)[1];
}

console.log(secondLargest(arr)); // 34
```

**Optimized Approach** O(n)

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
