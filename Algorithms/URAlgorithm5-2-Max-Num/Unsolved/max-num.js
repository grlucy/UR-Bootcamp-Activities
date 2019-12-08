// Write code to return the largest number in the given array

var maxNum = function(arr) {
  let maxNumber = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      maxNumber = arr[i];
    }
  }
  return maxNumber;
};
