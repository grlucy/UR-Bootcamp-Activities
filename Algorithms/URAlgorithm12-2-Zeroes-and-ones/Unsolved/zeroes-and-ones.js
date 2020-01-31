// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function(str) {
  let zeroCount = 0;
  let oneCount = 0;
  const strArr = str.split("");
  for (const num of strArr) {
    if (num === "0") {
      zeroCount++;
    } else if (num === "1") {
      oneCount++;
    }
  }
  if (zeroCount === oneCount) {
    return true;
  }
  return false;
};
