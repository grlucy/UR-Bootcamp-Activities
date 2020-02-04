// Write code to create a function that accepts a string and returns an object
// The object should contain keys for each character in the string
// Each key should point to an array containing the indexes the character is found in the string

var stringMap = function(str) {
  let map = {};

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (letter in map) {
      map[letter].push(i);
    } else {
      map[letter] = [i];
    }
  }

  return map;
};
