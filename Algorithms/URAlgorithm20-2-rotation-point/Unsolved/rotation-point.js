// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1

var rotationPoint = function(words) {
  let wordObj = {};
  for (let i = 0; i < words.length; i++) {
    wordObj[words[i]] = i;
  }
  let keysArr = Object.keys(wordObj).sort();
  if (wordObj[keysArr[0]] === 0) {
    return -1;
  }
  return wordObj[keysArr[0]];
};
