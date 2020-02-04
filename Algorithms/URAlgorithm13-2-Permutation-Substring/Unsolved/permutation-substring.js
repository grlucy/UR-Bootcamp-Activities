// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function(str, sub) {
  let strArr = str.split("");
  const subArr = sub.split("");
  let substring = true;
  for (const letter of subArr) {
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] === letter) {
        substring = true;
        strArr.splice(i, 1);
        break;
      } else {
        substring = false;
      }
    }
    if (substring === false) {
      return false;
    }
  }
  return true;
};
