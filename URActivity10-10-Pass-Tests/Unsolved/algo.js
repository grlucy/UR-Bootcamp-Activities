function Algo() {}

Algo.prototype.reverse = function(str) {
  const arr = str.split("");
  const reverseArr = arr.reverse();
  const result = reverseArr.join("");
  return result;
};

Algo.prototype.isPalindrome = function(str) {
  const reverseStr = new Algo().reverse(str);
  if (reverseStr === str) {
    return true;
  }
  return false;
};

Algo.prototype.capitalize = function(str) {
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let upperChar = arr[i].charAt(0).toUpperCase();
    for (let j = 1; j < arr[i].length; j++) {
      upperChar += arr[i][j];
    }
    arr[i] = upperChar;
  }
  const result = arr.join(" ");
  return result;
};

module.exports = Algo;
