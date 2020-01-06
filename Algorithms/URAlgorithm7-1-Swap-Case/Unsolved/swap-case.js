// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function(str) {
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const upperArray = upperChars.split("");
  const lowerArray = lowerChars.split("");

  const strArray = str.split("");
  let newStrArray = [];

  for (let i = 0; i < strArray.length; i++) {
    if (upperArray.indexOf(strArray[i]) !== -1) {
      newStrArray.push(strArray[i].toLowerCase());
    } else if (lowerArray.indexOf(strArray[i]) !== -1) {
      newStrArray.push(strArray[i].toUpperCase());
    } else {
      newStrArray.push(strArray[i]);
    }
  }

  const newStr = newStrArray.join("");
  return newStr;
};
