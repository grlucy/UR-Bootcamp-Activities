// Create your HTML Page via DOM Methods here!
document.body.setAttribute("style", "text-align:center;background-color:#aaa;");

var headingOne = document.createElement("h1");
headingOne.textContent = "This is h1";
headingOne.setAttribute("style", "color:blue;");
document.body.appendChild(headingOne);

var headingTwo = document.createElement("h2");
headingTwo.textContent = "This is h2";
headingTwo.setAttribute("style", "text-decoration:underline;");
document.body.appendChild(headingTwo);

var centerImage = document.createElement("img");
centerImage.setAttribute("style", "width:400px;");
centerImage.setAttribute(
  "src",
  "https://s23209.pcdn.co/wp-content/uploads/2014/03/IMG_7626edit-1.jpg"
);
document.body.appendChild(centerImage);

var pageBreak = document.createElement("br");
document.body.appendChild(pageBreak);

var imageCaption = document.createElement("p");
imageCaption.textContent = "Potstickers are the best food.";
imageCaption.setAttribute(
  "style",
  "display:inline-block;background-color:#eee;"
);
document.body.appendChild(imageCaption);

var orderedList = document.createElement("ol");
orderedList.innerHTML =
  "<li>Potstickers</li><li>Pizza</li><li>Bacon-wrapped shrimp</li><li>Rare steak</li>";
orderedList.setAttribute(
  "style",
  "text-align: left;background-color:blue;color:white;"
);
document.body.appendChild(orderedList);
