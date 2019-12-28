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
    console.log(response);
    // From the results, we will populate City, Date, Icon, Temperature, Humidity, Wind Speed, and UV Index
  });
}
