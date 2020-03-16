// Write a function that takes a positive integer and returns true if the integer is an armstrong number, else return false. To find out if a number is an armstrong number, take each individual digit and raise it to the power of the length of the entire number and add the digits. If the sum equals the original number, the number is an armstrong number

var isArmstrong = function(num) {
  const numArr = num.toString().split("");
  const numLength = numArr.length;
  let testArr = [];

  for (const digit of numArr) {
    testArr.push(Math.pow(Number(digit), numLength));
  }

  let testSum = 0;
  for (const index of testArr) {
    testSum += index;
  }

  if (testSum === num) {
    return true;
  } else {
    return false;
  }
};
