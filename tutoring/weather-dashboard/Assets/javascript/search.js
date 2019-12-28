// Declare global variables
var searchHistoryDiv = $("#search-history-div");
var searchInput = $("#search-input");
var searchButton = $("#search-button");
var city;

// Create a click event for the searchButton
searchButton.on("click", function() {
  // Take the string that the user entered in the searchInput
  city = searchInput.val();
  // Create a button labelled with the user's string
  var newButton = $("<button>");
  newButton.text(city);
  newButton.addClass("search-history-button");
  // Put the button inside the searchHistoryDiv
  searchHistoryDiv.prepend(newButton);
});
