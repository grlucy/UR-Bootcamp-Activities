// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

var lookAndSay = function(n) {
  // variable declarations
  const inputStr = n.toString();
  let currentIndex;
  let currentCount = 0;
  let outputStr = "";

  // Loop through the indexes of inputStr
  for (let i = 0; i < inputStr.length; i++) {
    // If inputStr has a length of 1, start and end here
    if (i === 0 && i === inputStr.length - 1) {
      currentIndex = inputStr[i];
      currentCount++;
      outputStr += currentCount.toString() + currentIndex;
    } else if (i === 0) {
      // If inputStr is longer than 1, and this is the first index
      currentIndex = inputStr[i];
      currentCount++;
    } else if (i === inputStr.length - 1) {
      //If inputStr is longer than 1, and this is the last index
      if (inputStr[i] === currentIndex) {
        currentCount++;
        outputStr += currentCount.toString() + currentIndex;
      } else {
        outputStr += currentCount.toString() + currentIndex;
        currentIndex = inputStr[i];
        currentCount = 1;
        outputStr += currentCount.toString() + currentIndex;
      }
    } else if (inputStr[i] === currentIndex) {
      // If current index is same as previous index, and this is not the first or last index, increment count of the number in that index
      currentCount++;
    } else {
      // If current index is different from previous index, and this is not the first or last index, store the number in the previous index and its associated count, then reset curentIndex and currentCount
      outputStr += currentCount.toString() + currentIndex;
      currentIndex = inputStr[i];
      currentCount = 1;
    }
  }

  // Return the result in number format
  const outputNum = Number(outputStr);
  return outputNum;
};
