// Write code to create a function that accepts an array of unique numbers
// If any two numbers in the array add up to 20, return true, else return false

var multiplyInto20 = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let tempArr = arr;
    tempArr.splice(i, 1);
    for (const index of tempArr) {
      if (currentNum * index === 20) {
        return true;
      }
    }
  }
  return false;
};
