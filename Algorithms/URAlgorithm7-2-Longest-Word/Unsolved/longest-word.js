// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

var longestWord = function(str) {
  const strArray = str.split(" ");
  let letterCount = 0;
  let longestWord;

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length > letterCount) {
      letterCount = strArray[i].length;
      longestWord = strArray[i];
    }
  }
  return longestWord;
};
