var today = moment().format('L');
var searchHistoryList = [];
var apiKey = "";

// function to check for the current weather condition
function currentCondition(city) {
    var queryURL = '';

    $.ajax({
        url: gueryURL,
        method: "GET"
    }).then(function(cityWeatherResponse)) {
        console.log(cityWeatherResponse);
    }
}