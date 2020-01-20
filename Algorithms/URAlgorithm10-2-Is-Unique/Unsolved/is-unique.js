// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
  for (const num of arr) {
    let current = num;
    let currentIndex = arr.indexOf(num);
    arr.splice(currentIndex, 1);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === current) {
        return false;
      }
    }
  }
  return true;
};
