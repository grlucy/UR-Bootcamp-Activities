// Write a function that takes in an array of digits representing a non negative integer and add one to it. The digits are arranged such that the most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place

var plusOne = function(digits) {
  const lastIndex = digits.length - 1;

  if (!digits.length) {
    digits[0] = 1;
  } else if (digits[lastIndex] === 9) {
    let notNine;
    for (let i = lastIndex - 1; i >= 0; i--) {
      console.log(i);
      if (i === 0 && digits[i] === 9) {
        notNine = -1;
        break;
      } else if (digits[i] === 9) {
        continue;
      } else {
        notNine = i;
        break;
      }
    }
    if (notNine === -1) {
      digits[0] = 1;
      let length = digits.length;
      for (let i = 1; i <= length; i++) {
        digits[i] = 0;
      }
    } else {
      digits[notNine]++;
      for (let i = notNine + 1; i < digits.length; i++) {
        digits[i] = 0;
      }
    }
  } else {
    digits[lastIndex] += 1;
  }

  return digits;
};
