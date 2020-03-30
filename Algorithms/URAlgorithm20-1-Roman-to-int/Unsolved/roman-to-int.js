// Write a function that takes in a Roman Numeral string and returns its integer form

var romanToInt = function(str) {
  const romanArr = str.split("");
  let result = 0;
  for (let i = 0; i < romanArr.length; i++) {
    if (romanArr[i] === "I" && romanArr[i + 1] === "X") {
      result += 9;
    } else if (romanArr[i] === "I" && romanArr[i + 1] === "V") {
      result += 4;
    } else if (romanArr[i] === "X" && romanArr[i + 1] === "C") {
      result += 90;
    } else if (romanArr[i] === "X" && romanArr[i + 1] === "L") {
      result += 40;
    } else if (romanArr[i] === "C" && romanArr[i + 1] === "M") {
      result += 900;
    } else if (romanArr[i] === "C" && romanArr[i + 1] === "D") {
      result += 400;
    } else if (romanArr[i] === "V" && romanArr[i - 1] !== "I") {
      result += 5;
    } else if (romanArr[i] === "X" && romanArr[i - 1] !== "I") {
      result += 10;
    } else if (romanArr[i] === "L" && romanArr[i - 1] !== "X") {
      result += 50;
    } else if (romanArr[i] === "C" && romanArr[i - 1] !== "X") {
      result += 100;
    } else if (romanArr[i] === "D" && romanArr[i - 1] !== "C") {
      result += 500;
    } else if (romanArr[i] === "M" && romanArr[i - 1] !== "C") {
      result += 1000;
    } else if (romanArr[i] === "I") {
      result += 1;
    } else {
      continue;
    }
  }
  return result;
};
