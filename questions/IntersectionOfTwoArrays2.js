/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

0 <= nums1[i], nums2[i] <= 1000

Eg:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
*/

function intersect(nums1, nums2) {
  const result = [];
  if (nums1.length <= nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i])) {
        result.push(nums1[i]);
        nums2[nums2.indexOf(nums1[i])] = -1;
      }
    }
  } else {
    for (let i = 0; i < nums2.length; i++) {
      if (nums1.includes(nums2[i])) {
        result.push(nums2[i]);
        nums1[nums1.indexOf(nums2[i])] = -1;
      }
    }
  }

  return result;
}

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
