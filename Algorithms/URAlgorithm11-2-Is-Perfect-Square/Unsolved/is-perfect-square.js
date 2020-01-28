// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
  for (let i = 0; i <= num; i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
};
