/* ! Median of two sorted arrays.
    Given two sorted arrays, merge them and return median

   Eg 1: nums1 = [1, 3], nums2 = [2]. Output: 2.00000
   Explanation: merged array = [1, 2, 3] and median is 2.

   Eg 2: nums1 = [1,2], nums2 = [3,4]. Output: 2.50000
   Explanation: merged array = [1, 2, 3, 4] and median is (2 + 3) / 2 = 2.5
*/

const medianofSortedArrays = function (nums1, nums2) {
  const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  if (mergedArray.length % 2 === 0)
    return (
      (mergedArray[mergedArray.length / 2] +
        mergedArray[mergedArray.length / 2 - 1]) /
      2
    );
  return mergedArray[Math.floor(mergedArray.length / 2)];
};

console.log("Meidan of two sorted arrays");
console.log(medianofSortedArrays([1, 3], [2]));
console.log(medianofSortedArrays([1, 2], [3, 4]));
console.log("-------------------------------");
