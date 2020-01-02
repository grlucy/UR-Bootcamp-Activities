// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
  if (num === 0) {
    return 1;
  } else {
    let fac = 1;
    for (let i = 1; i <= num; i++) {
      fac = fac * i;
    }
    return fac;
  }
};
