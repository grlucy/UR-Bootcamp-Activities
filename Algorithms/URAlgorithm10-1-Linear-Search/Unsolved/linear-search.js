// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function(arr, target) {
  let i = -1;
  let match = false;
  for (const arrIndex of arr) {
    i++;
    if (arrIndex === target) {
      match = true;
      return i;
    }
  }
  if (match === false) {
    return -1;
  }
};
