// Write code to create a function that accepts two strings
// If the second string is found inside of the first string, return its starting index in the first string
// Else return `-1`

var strStr = function(str1, str2) {
  if (str2 === "") {
    return 0;
  }
  let contained = false;
  let str2Stop = str2.length - 1;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[0]) {
      console.log("**********");
      console.log(`str1[${i}] is ${str1[i]}`);
      console.log(`str2[0] is ${str2[0]}`);
      console.log("**********");
      for (let j = 0; j < str2.length; j++) {
        if (str1[i + j] !== str2[j]) {
          console.log("**********");
          console.log(`str1[${i + j}] = ${str1[i + j]}`);
          console.log(`str2[${j}] = ${str2[j]}`);
          console.log("Strings are not equal");
          console.log("**********");
          break;
        }
        if (j === str2Stop) {
          console.log("Set contained to true");
          contained = true;
        }
      }
      if (contained) {
        console.log("here");
        return i;
      }
    }
  }
  return -1;
};

console.log("Gina's Test *********************************");
console.log(strStr("Wakanda", "an"));
console.log("*****************************");
