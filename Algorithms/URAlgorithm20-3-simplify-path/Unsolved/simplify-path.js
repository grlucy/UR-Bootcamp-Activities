// Write a function that takes in an absolute file path and simplifies it

var simplifyPath = function(path) {
  const pathArr = path.split("/");
  let resultArr = [];

  for (const folder of pathArr) {
    switch (folder) {
      case "":
        break;
      case ".":
        break;
      case "..":
        if (resultArr[resultArr.length - 1]) {
          resultArr.splice(resultArr.length - 1, 1);
        }
        break;
      default:
        resultArr.push(folder);
    }
  }

  let result = "";
  if (resultArr.length === 0) {
    return "/";
  } else {
    for (const folder of resultArr) {
      result += "/";
      result += folder;
    }
  }

  return result;
};
