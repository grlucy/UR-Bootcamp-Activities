// declare global variables
var forecastDiv = $("#five-day-forecast-div");

// When the user clicks the search button...
// We call the 16-day forecast API
function forecastWeather() {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&units=imperial&mode=json&appid=bccd5fad3b0259856da508d996025871";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(res) {
    // Create header that says 5-Day Forecast
    var newHeader = $("<h2>");
    newHeader.text("5-Day Forecast:");
    forecastDiv.append(newHeader);
    // Create a div that is a flexbox
    var flexDiv = $("<div>");
    flexDiv.addClass("flex-div");
    // Use a for loop to create daily divs inside of the flexbox div
    for (var i = 0; i < res.list.length; i += 8) {
      var newDailyDiv = $("<div>");
      newDailyDiv.addClass("daily-div");
      newDailyDiv.text(i); // Instead of this, here is where you would populate Date, Icon, Temp, and Humidity
      flexDiv.append(newDailyDiv);
    }
    forecastDiv.append(flexDiv);
  });
}
