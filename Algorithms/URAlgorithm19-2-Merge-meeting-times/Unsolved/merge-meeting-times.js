// Write a function that takes in a 2D array of meeting times, where each sub array contains 2 integers representing a meeting start and end time. Return a new 2D array such that overlapping meeting blocks are condensed into combined meeting blocks
// 1-4, 5-7, 6-9 ==> 1-4, 5-9

var mergeMeetingTimes = function(arr) {
  arr.sort((a, b) => {
    return a[0] - b[0];
  });

  let timeMap = {};
  for (let i = 0; i < arr.length; i++) {
    for (let a = arr[i][0]; a < arr[i][1]; a++) {
      timeMap[a] = true;
    }
  }

  let mergedArr = [];

  for (let key of Object.keys(timeMap)) {
    if (timeMap[Number(key) - 1] === undefined) {
      for (let i = Number(key); i < 13; i++) {
        if (timeMap[i] === undefined) {
          mergedArr.push([Number(key), i]);
          break;
        }
      }
    }
  }

  return mergedArr;
};
