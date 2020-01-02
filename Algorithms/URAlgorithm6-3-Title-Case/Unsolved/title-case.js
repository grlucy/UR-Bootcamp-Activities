// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
  let strArray = str.split(" ");
  let newStringArray = [];
  for (let i = 0; i < strArray.length; i++) {
    newStringArray.push(
      strArray[i].charAt(0).toUpperCase() + strArray[i].substring(1)
    );
  }
  let newString = newStringArray.join(" ");
  return newString;
};
