// Write a function that takes in two strings and returns true if they are one edit away, else return false

var oneEditAway = function (str1, str2) {
  if (str1 === str2 || Math.abs(str1.length - str2.length) > 1) {
    return false;
  }
  let difference = false;
  let i = 0;
  let j = 0;
  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
      continue;
    }
    if (difference) {
      return false;
    }
    if (str1.length > str2.length) {
      i++;
      difference = true;
      continue;
    }
    if (str2.length > str1.length) {
      j++;
      difference = true;
      continue;
    }
    i++;
    j++;
    difference = true;
  }
  return true;
};

console.log("expect true: ", oneEditAway("abc", "acc"));
console.log("expect true: ", oneEditAway("abc", "ac"));
console.log("expect true: ", oneEditAway("bc", "abc"));
console.log("expect false: ", oneEditAway("abc", "abcde"));
console.log("expect false: ", oneEditAway("abc", "abc"));
