var imgElements = document.querySelectorAll("img");

for (var i = 0; i < imgElements.length; i++) {
  imgElements[i].setAttribute("src", "../catimage.jpg");
  imgElements[i].setAttribute("alt", "cat image");
}

var aElements = document.querySelectorAll("a");

for (var i = 0; i < aElements.length; i++) {
  aElements[i].setAttribute("href", "http://www.google.com/");
  aElements[i].setAttribute("target", "_blank");
}

var mainDiv = document.getElementById("main");

mainDiv.setAttribute("style", "background-color: blue");

document.body.setAttribute(
  "style",
  "padding:0;margin:0;background-color:red;text-align:center;"
);
