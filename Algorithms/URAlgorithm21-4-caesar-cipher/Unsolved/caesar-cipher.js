// Write a function that takes in a string and and an offset and returns a new string with each character moved by the offset

var caesarCipher = function (str, offset) {
  if (offset === 0) {
    return str;
  }

  const simpleOffset = offset % 26;

  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let newAlphabet = {};

  for (let i = 0; i <= 25; i++) {
    // Handle negative vs positive offset
    let x = i + simpleOffset;
    if (x >= 26) {
      x -= 26;
    } else if (x < 0) {
      x += 26;
    }

    // Create object mapping alphabet to offset alphabet
    newAlphabet[alphabet[i]] = alphabet[x];
  }

  // Create new string
  let newStr = "";

  for (let j = 0; j < str.length; j++) {
    let addition = "";

    // Handle spaces and special characters
    if (newAlphabet[str[j].toUpperCase()] === undefined) {
      addition = str[j];
    } else {
      // Handle casing
      if (str[j].toUpperCase() === str[j]) {
        addition = newAlphabet[str[j].toUpperCase()];
      } else {
        addition = newAlphabet[str[j].toUpperCase()].toLowerCase();
      }
    }

    newStr += addition;
  }

  return newStr;
};
