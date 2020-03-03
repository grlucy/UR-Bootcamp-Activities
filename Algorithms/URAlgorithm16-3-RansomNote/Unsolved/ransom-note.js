// Write a function that takes two strings and determines returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

// This answer passes all tests but is incorrect because it doesn't check for frequency:
// var ransomNote = function(magazine, note) {
//   const magazineArr = magazine.split(" ");
//   const noteArr = note.split(" ");

//   for (const word of noteArr) {
//     if (magazineArr.indexOf(word) === -1) {
//       return false;
//     }
//   }
//   return true;
// };

var ransomNote = function(magazine, note) {
  const magazineArr = magazine.split(" ");
  const noteArr = note.split(" ");

  let magazineMap = {};

  for (const word of magazineArr) {
    if (!magazineMap[word]) {
      magazineMap[word] = 1;
    } else {
      magazineMap[word]++;
    }
  }

  for (const word of noteArr) {
    if (!magazineMap[word]) {
      return false;
    } else {
      magazineMap[word]--;
      if (magazineMap[word] < 0) {
        return false;
      }
    }
  }

  return true;
};

console.log("_____________");
console.log(ransomNote("hi gina hey", "hi hi gina"));
console.log("_____________");
console.log(ransomNote("hi gina hey hi", "hi hi gina"));
