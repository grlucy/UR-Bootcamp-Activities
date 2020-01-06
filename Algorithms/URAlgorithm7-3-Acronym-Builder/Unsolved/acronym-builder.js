// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function(str) {
  const strArray = str.split(" ");
  let acronym = "";

  for (let i = 0; i < strArray.length; i++) {
    acronym += strArray[i][0].toUpperCase();
  }

  return acronym;
};
