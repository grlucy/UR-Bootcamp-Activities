// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

var minIncrement = function(nums) {
  let count = 0;
  let numMap = {};
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    numMap[currentNum] = numMap[currentNum] + 1 || 1;
  }
  function incrementNums(numMap) {
    let currentCount = count;
    let numMapKeys = Object.keys(numMap);
    for (const key of numMapKeys) {
      if (numMap[key] > 1) {
        numMap[key]--;
        numMap[parseInt(key) + 1] = numMap[parseInt(key) + 1] + 1 || 1;
        count++;
      }
    }
    if (currentCount === count) {
      return count;
    } else {
      incrementNums(numMap);
    }
  }
  incrementNums(numMap);
  return count;
};
