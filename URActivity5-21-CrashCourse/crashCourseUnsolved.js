// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================

let basicVar;

// 2. ARRAYS
// ==========================================================

// Create an array of five strings
basicVar = ["one", "two", "three", "four", "five"];

// Create an array of five numbers
const numArr = [1, 2, 3, 4, 5];

// 3. FOR LOOPS
// ==========================================================

// Create a for loop that loops through and prints "My name is Bob five times"
let text = "";
function loopFive() {
  for (var i = 1; i < 6; i++) {
    text += i + " My name is Bob\n";
  }
  return text;
}
alert(loopFive());

// Create a for loop that loops through your five string array
for (var i = 0; i < basicVar.length; i++) {
  console.log(basicVar[i]);
}

// 4. FUNCTIONS
// ==========================================================

// Create a function that takes two numbers and divides the first number by the second.
// Then call that function

function numDivide(num1, num2) {
  console.log(num1 / num2);
}
numDivide(9, 3);

// Create a function that takes in an array of numbers and then loops through the array and prints out numbers.
// Then call that function

function printNumArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
const arrPrint = [1, 1, 2, 3, 5, 8, 13, 21];
printNumArr(arrPrint);

// 5. OBJECTS
// ==========================================================

// Create a JavaScript Object

const cat = {
  color: "grey",
  breed: "russian blue",
  age: 3
};

// Console log any three of the properties in that object

console.log(`This ${cat.color} cat is a ${cat.breed}, age ${cat.age} years.`);

// Create an Array of 5 Objects
const people = [
  { first: "George", last: "Washington", president: "1789" },
  { first: "John", last: "Adams", president: "1797" },
  { first: "Thomas", last: "Jefferson", president: "1801" },
  { first: "James", last: "Madison", president: "1809" },
  { first: "James", last: "Monroe", president: "1817" }
];

// Console log 3 properties for every one of the five objects

for (var i = 0; i < people.length; i++) {
  console.log(
    `${people[i].first} ${people[i].last} became President in ${people[i].president}.`
  );
}

// 6. JQUERY EVENTS
// ==========================================================

// Create a basic html button then create an onClick event that triggers an on click event.

let newButton = $("<button>Click Me!</button>");
newButton.on("click", function(event) {
  alert("You clicked me... how dare you?!");
});
$("h1").append(newButton);
