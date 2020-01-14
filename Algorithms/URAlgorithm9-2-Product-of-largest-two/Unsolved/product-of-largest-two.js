// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
  //Find the largest number in the given array.
  let previous = 0;
  let current;
  let largest;
  let secondLargest;

  for (let i = 0; i < arr.length; i++) {
    current = arr[i];
    if (current > previous) {
      largest = current;
    }
    previous = current;
  }
  // Find the second largest number in the given array
  previous = 0;
  for (let i = 0; i < arr.length; i++) {
    current = arr[i];
    if (current === largest) {
      console.log("found largest already");
    } else if (current > previous) {
      secondLargest = current;
    }
    previous = current;
  }
  //Return the product of the largest and the second largest number.
  return largest * secondLargest;
};
