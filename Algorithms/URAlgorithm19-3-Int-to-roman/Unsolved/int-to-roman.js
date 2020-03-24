// Write a function that takes in an integer and returns it as a Roman numeral string

var intToRoman = function(num) {
  // Create array from num with ones place in index 0, tens place in index 1, etc.
  const str = num.toString();
  let arr = str.split("");
  arr.reverse();

  let romanArr = [];

  // Translate ones place
  switch (arr[0]) {
    case "1":
      romanArr.push("I");
      break;
    case "2":
      romanArr.push("II");
      break;
    case "3":
      romanArr.push("III");
      break;
    case "4":
      romanArr.push("IV");
      break;
    case "5":
      romanArr.push("V");
      break;
    case "6":
      romanArr.push("VI");
      break;
    case "7":
      romanArr.push("VII");
      break;
    case "8":
      romanArr.push("VIII");
      break;
    case "9":
      romanArr.push("IX");
      break;
    default:
      romanArr.push("");
  }

  //Translate tens place
  if (arr[1]) {
    switch (arr[1]) {
      case "1":
        romanArr.push("X");
        break;
      case "2":
        romanArr.push("XX");
        break;
      case "3":
        romanArr.push("XXX");
        break;
      case "4":
        romanArr.push("XL");
        break;
      case "5":
        romanArr.push("L");
        break;
      case "6":
        romanArr.push("LX");
        break;
      case "7":
        romanArr.push("LXX");
        break;
      case "8":
        romanArr.push("LXXX");
        break;
      case "9":
        romanArr.push("XC");
        break;
      default:
        romanArr.push("");
    }
  }

  //Translate hundreds place
  if (arr[2]) {
    switch (arr[2]) {
      case "1":
        romanArr.push("C");
        break;
      case "2":
        romanArr.push("CC");
        break;
      case "3":
        romanArr.push("CCC");
        break;
      case "4":
        romanArr.push("CD");
        break;
      case "5":
        romanArr.push("D");
        break;
      case "6":
        romanArr.push("DC");
        break;
      case "7":
        romanArr.push("DCC");
        break;
      case "8":
        romanArr.push("DCCC");
        break;
      case "9":
        romanArr.push("CM");
        break;
      default:
        romanArr.push("");
    }
  }

  //Translate thousands place
  if (arr[3]) {
    switch (arr[3]) {
      case "1":
        romanArr.push("M");
        break;
      case "2":
        romanArr.push("MM");
        break;
      case "3":
        romanArr.push("MMM");
        break;
      default:
        return console.log("Number is invalid");
    }
  }

  //Create new string from array
  let reverseRomanArr = romanArr;
  reverseRomanArr.reverse();

  let romanStr = "";

  for (const index of reverseRomanArr) {
    romanStr += index;
  }

  return romanStr;
};
