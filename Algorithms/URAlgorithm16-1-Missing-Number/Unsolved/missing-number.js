// Write a function that takes an unsorted array of positive and unique integers and returns the number missing from the array

var missingNumber = function(nums) {
  const expectedCount = nums.length + 1;
  for (let i = 0; i < expectedCount; i++) {
    if (nums.indexOf(i) === -1) {
      return i;
    }
  }
};
