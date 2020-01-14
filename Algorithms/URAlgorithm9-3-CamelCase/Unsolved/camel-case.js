// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
  const strArray = str.toLowerCase().split(" ");
  // Uppercase first letter of non-first words
  for (let i = 1; i < strArray.length; i++) {
    const current = strArray[i];
    let firstLetter = current.charAt(0).toUpperCase();
    for (let i = 1; i < current.length; i++) {
      firstLetter += current.charAt(i);
    }
    strArray[i] = firstLetter;
  }
  return strArray.join("");
};
