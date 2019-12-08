// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
  let lowerString = str.toLowerCase();
  let vowelCount = 0;
  for (var i = 0; i < lowerString.length; i++) {
    let stringChar = lowerString.charAt(i);
    if (
      stringChar === "a" ||
      stringChar === "e" ||
      stringChar === "i" ||
      stringChar === "o" ||
      stringChar === "u"
    ) {
      vowelCount++;
    }
  }
  return vowelCount;
};
