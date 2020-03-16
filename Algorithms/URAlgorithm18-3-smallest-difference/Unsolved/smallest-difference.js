// Write a function that takes in two sorted arrays and returns a pair of numbers (one from each array) with the smallest difference

var smallestDifference = function(arr1, arr2) {
  let difference = Infinity;
  let result;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) < difference) {
        result = [arr1[i], arr2[j]];
        difference = Math.abs(arr1[i] - arr2[j]);
      }
    }
  }
  return result;
};
