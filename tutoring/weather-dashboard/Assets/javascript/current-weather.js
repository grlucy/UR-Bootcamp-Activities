// declare global variables
var currentWeatherDiv = $("#current-weather-div");

// When the user the clicks the search button...
// We will call the weather API
function currentWeather() {
  // Create a query URL & API key
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&mode=json&appid=bccd5fad3b0259856da508d996025871";
  $.ajax({
    url: queryURL,
    method: "GET",
    error: function() {
      alert("Error: City not found.");
    }
  }).then(function(response) {
    // We will take the results of the API
    // From the results, we will populate City, Date, Icon, Temperature, Humidity, Wind Speed, and UV Index
    // City and Date
    var currentHeading = $("<h2>");
    currentHeading.text(
      response.name + " (" + moment.unix(response.dt).format("MM/DD/YYYY") + ")"
    );
    currentHeading.addClass("display-inline");
    var weatherIcon = $(
      '<img src="http://openweathermap.org/img/wn/' +
        response.weather[0].icon +
        '@2x.png">'
    );
    currentWeatherDiv.append(currentHeading);
    currentWeatherDiv.append(weatherIcon);
    // This is where you would add temperature, humidity, wind speed, and UV Index
  });
}
