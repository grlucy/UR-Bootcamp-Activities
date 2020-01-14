// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
  let object = {};
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (current in object) {
      object[`${current}`] += 1;
    } else {
      object[`${current}`] = 1;
    }
  }
  return object;
};
