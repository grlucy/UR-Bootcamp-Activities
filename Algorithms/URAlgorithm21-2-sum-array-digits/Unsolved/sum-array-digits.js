// Write a function that takes in two arrays of non-negative integers
// Each element in the arrays contains a single digit
// Together each array represents a whole number
// Create and return a new array that is the sum of the numbers of the two provided arrays
// Solve this problem without type coercion, ie don't join the array into a string

var sumArrayDigits = function (arr1, arr2) {
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let result = [];
  let tens = false;
  while (i >= 0 || j >= 0) {
    let newDigit = 0;
    if (tens) {
      newDigit++;
      tens = false;
    }
    if (arr1[i]) {
      newDigit += arr1[i];
    }
    if (arr2[j]) {
      newDigit += arr2[j];
    }
    if (newDigit > 9) {
      tens = true;
      newDigit -= 10;
    }
    result.unshift(newDigit);
    i--;
    j--;
  }
  if (tens) {
    result.unshift(1);
  }
  return result;
};
