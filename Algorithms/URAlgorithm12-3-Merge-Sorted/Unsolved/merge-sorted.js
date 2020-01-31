// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function(arr1, arr2) {
  let newSortedArr = [];

  let indexArr1 = 0;
  let indexArr2 = 0;

  while (indexArr1 < arr1.length && indexArr2 < arr2.length) {
    if (arr1[indexArr1] < arr2[indexArr2]) {
      newSortedArr.push(arr1[indexArr1]);
      indexArr1++;
    } else {
      newSortedArr.push(arr2[indexArr2]);
      indexArr2++;
    }
  }

  while (indexArr1 < arr1.length) {
    newSortedArr.push(arr1[indexArr1]);
    indexArr1++;
  }

  while (indexArr2 < arr2.length) {
    newSortedArr.push(arr2[indexArr2]);
    indexArr2++;
  }

  return newSortedArr;
};
