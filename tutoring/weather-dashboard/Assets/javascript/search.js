// Declare global variables
var searchHistoryDiv = $("#search-history-div");
var searchInput = $("#search-input");
var searchButton = $("#search-button");
var city;
var searchHistoryArray = [];

// Create a click event for the searchButton
searchButton.on("click", function() {
  // Take the string that the user entered in the searchInput
  city = searchInput.val();
  // Add city to searchHistoryArray
  searchHistoryArray.push(city);
  // Add the searchHistoryArray to local storage
  localStorage.setItem("searchHistory", JSON.stringify(searchHistoryArray));
  // Create a button labelled with the user's string
  var newButton = $("<button>");
  newButton.text(city);
  newButton.addClass("search-history-button");
  // Create a click event for newButton
  // Put the button inside the searchHistoryDiv
  searchHistoryDiv.prepend(newButton);
  // City entered by user is used for API Calls
  currentWeather(city);
  forecastWeather(city);
});

// Create a function that takes search history from local storage and creates search history buttons as soon as the page loads
function historyButtons() {
  // get our array from local storage
  searchHistoryArray = JSON.parse(localStorage.getItem("searchHistory"));
  console.log(searchHistoryArray);
  // for loop to create buttons from array
  for (var i = searchHistoryArray.length - 1; i >= 0; i--) {
    console.log("I'm inside the for loop");
    // Create a button for this index of the array
    var newButton = $("<button>");
    newButton.text(searchHistoryArray[i]);
    newButton.addClass("search-history-button");
    // Create a click event for newButton
    // Put the button inside the searchHistoryDiv
    searchHistoryDiv.append(newButton);
  }
}

historyButtons();
