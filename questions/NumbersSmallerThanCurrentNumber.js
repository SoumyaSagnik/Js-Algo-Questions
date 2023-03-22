// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]

const nums = [8, 1, 2, 2, 3];

const smallerNumbersThanCurrent = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) count++;
    }
    result[i] = count;
  }
  return result;
};

const op = smallerNumbersThanCurrent(nums);

console.log(op);
