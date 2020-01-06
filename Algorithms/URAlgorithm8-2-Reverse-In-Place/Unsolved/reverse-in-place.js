// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverseInPlace = function(arr) {
  const arrayLength = arr.length;

  for (let i = arrayLength - 1; i >= 0; i--) {
    let currentIndex = arr[i];
    arr.push(currentIndex);
  }

  for (let i = arrayLength - 1; i >= 0; i--) {
    arr.shift();
  }

  return arr;
};
