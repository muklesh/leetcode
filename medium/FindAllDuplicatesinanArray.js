// 442. Find All Duplicates in an Array
// Medium
// Topics
// Companies
// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []
 

var findDuplicates = function(nums) {

    const res = [];
    const countArray = new Array(nums.length).fill(0);

    for (const num of nums) {
        countArray[num - 1]++; 
    }
    for (let i = 0; i < countArray.length; i++) {
        if (countArray[i] === 2) {
            res.push(i + 1); 
        }
    }
    return res;
};

let nums = [4,3,2,7,8,2,3,1];
console.log(findDuplicates(nums));