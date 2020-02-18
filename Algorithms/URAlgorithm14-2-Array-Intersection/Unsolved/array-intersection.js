// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function(arr1, arr2) {
  let newArr2 = arr2;
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let currentIndex1 = arr1[i];
    for (let i = 0; i < newArr2.length; i++) {
      if (newArr2[i] === currentIndex1) {
        result.push(currentIndex1);
        newArr2.splice(i, 1);
        break;
      }
    }
  }
  return result;
};
