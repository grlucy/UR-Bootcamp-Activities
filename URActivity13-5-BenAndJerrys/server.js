const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var icecreams = [
  { name: "vanilla", price: 10, awesomeness: 3 },
  { name: "chocolate", price: 4, awesomeness: 8 },
  { name: "banana", price: 1, awesomeness: 1 },
  { name: "greentea", price: 5, awesomeness: 7 },
  { name: "jawbreakers", price: 6, awesomeness: 2 },
  { name: "pistachio", price: 11, awesomeness: 15 }
];

app.get("/icecream/:name", function(req, res) {
  //display the name, price and awesomeness for that specific ice cream
  let index = -1;
  for (let i = 0; i < icecreams.length; i++) {
    if (icecreams[i].name === req.params.name) {
      index = i;
      break;
    }
  }
  if (index === -1) {
    res.send("Error: No ice cream found. Try again...");
  } else {
    res.render("icecream", icecreams[index]);
  }
});

app.get("/icecreams", function(req, res) {
  //loop over all the ice creams and display them all to the user
  res.render("all-icecreams", { type: icecreams });
});

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
