// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
  let stringB = strB;
  if (strA.length === stringB.length) {
    for (let i = 0; i < strA.length; i++) {
      let currentChar = strA.charAt(i);
      if (stringB.includes(currentChar)) {
        let tempStr = stringB;
        stringB = tempStr.replace(currentChar, "-");
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};
