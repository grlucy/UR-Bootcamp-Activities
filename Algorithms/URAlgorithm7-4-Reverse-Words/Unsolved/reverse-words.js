// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

var reverseWords = function(str) {
  const strArray = str.split(" ");
  let newArray = [];

  for (let i = strArray.length; i >= 0; i--) {
    newArray.push(strArray[i]);
  }

  const newStr = newArray.join(" ");
  return newStr.trim();
};
