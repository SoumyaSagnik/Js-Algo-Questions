// Find intersection of two arrays and return the new array
//Eg:    Input: nums1 = [1,2,2,1], nums2 = [2,2]         Output: [2]
// Each element in the result must be unique and you may return the result in any order.

function intersection(nums1, nums2) {
  const resultArray = [];
  if (nums1.length <= nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i])) resultArray.push(nums1[i]);
    }
  } else {
    for (let i = 0; i < nums2.length; i++) {
      if (nums1.includes(nums2[i])) resultArray.push(nums2[i]);
    }
  }

  return [...new Set(resultArray)]; // removing duplicates
}

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

// Output: [4, 9]
