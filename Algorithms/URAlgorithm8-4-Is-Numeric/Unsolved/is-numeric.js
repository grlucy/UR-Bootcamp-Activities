// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.

var isNumeric = function(str) {
  let decimalCount = 0;
  let numberCount = 0;
  const firstCharArr = "+-0123456789.".split("");
  const otherCharArr = "0123456789.".split("");

  if (str === "") {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      if (firstCharArr.indexOf(str[i]) === -1) {
        return false;
      } else if (str[i] === ".") {
        decimalCount++;
      } else if (otherCharArr.indexOf(str[i]) !== -1) {
        numberCount++;
      }
    } else {
      if (otherCharArr.indexOf(str[i]) === -1) {
        return false;
      } else if (str[i] === ".") {
        decimalCount++;
        if (decimalCount > 1) {
          return false;
        }
      } else {
        numberCount++;
      }
    }
  }

  if (numberCount === 0) {
    return false;
  }

  return true;
};
