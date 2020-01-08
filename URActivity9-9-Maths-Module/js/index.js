const maths = require("./maths.js");

const num1 = parseInt(process.argv[2]);
const operator = process.argv[3];
const num2 = parseInt(process.argv[4]);

switch (operator) {
  case "+":
    console.log(maths.sum(num1, num2));
    break;
  case "-":
    console.log(maths.difference(num1, num2));
    break;
  case "x":
    console.log(maths.product(num1, num2));
    break;
  case "/":
    console.log(maths.quotient(num1, num2));
    break;
}
