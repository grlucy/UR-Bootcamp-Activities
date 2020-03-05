// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

var validBrackets = function(str) {
  const arr = str.split("");
  const openArr = [];

  for (const index of arr) {
    if (index === "(" || index === "[" || index === "{") {
      openArr.push(index);
    }
    if (index === ")") {
      if (openArr.pop() !== "(") {
        return false;
      }
    }
    if (index === "]") {
      if (openArr.pop() !== "[") {
        return false;
      }
    }
    if (index === "}") {
      if (openArr.pop() !== "{") {
        return false;
      }
    }
  }

  return openArr.length === 0;
};
