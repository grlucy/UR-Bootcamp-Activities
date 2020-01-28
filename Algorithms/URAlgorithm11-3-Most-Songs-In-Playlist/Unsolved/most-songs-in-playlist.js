// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the array that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  function compareNumbers(a, b) {
    return a - b;
  }
  const sortedArr = arr.sort(compareNumbers);
  let totalTime = 0;
  let count = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    totalTime += sortedArr[i];
    if (totalTime > 60) {
      return count;
    }
    count++;
  }
  return count;
};
