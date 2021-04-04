# Weather Dashboard by Benjamin Wilson

## DESCRIPTION 😊

This project was quite tough and challenging for me as APIs, are not my strong suit and I feel really overwhelmed with all of this however I did manage to get it done

![SCREENSHOT](https://user-images.githubusercontent.com/77607177/113507424-ac629000-958d-11eb-9924-4cc911d791b1.png)

## FEATURES 💥

- When searched for a city, the current and future conditions for that city will be presented and that city is added to the search history
- When viewing current weather conditions for the city, the following is shown:
  - City name
  - Date
  - An icon representation of weather conditions
  - Temperature
  - Humidity
  - Wind speed
  - UV index
- When viewing the UV index, it is presented with a color indicating severity (reference: [Ultraviolet Index Wikipeadia](https://en.wikipedia.org/wiki/Ultraviolet_index#:~:text=A%20UV%20index%20reading%20of,broad%20spectrum%20SPF%2030%2B%20sunscreen.&text=A%20UV%20index%20reading%20of%206%20to%207%20means%20high,harm%20from%20unprotected%20sun%20exposure.))
  - ![#3EA72D](https://via.placeholder.com/15/3EA72D/000000?text=+) 0-2 Low
  - ![#FFF300](https://via.placeholder.com/15/FFF300/000000?text=+) 3-5 Moderate
  - ![#F18B00](https://via.placeholder.com/15/F18B00/000000?text=+) 6-7 Orange
  - ![#E53210](https://via.placeholder.com/15/E53210/000000?text=+) 8-10 Very High
  - ![#B567A4](https://via.placeholder.com/15/B567A4/000000?text=+) 11+ Extreme
- When viewing the future weather conditions for the city, a 5-day forecast will be presented with the following information:
  - Date
  - An icon representation of weather conditions
  - Temperature
  - Humidity
- When a city in the search history is clicked, the current and future conditions for that city is presented again
- When the weather dashboard is opened, the last searched city forecast is presented

## REPOSITORY 📁

What I have been doing to keep my repo clean and up to date:

- I have constantly used git add, commit and push to ensure all changes have been updated to the github repo
- Added extensive comments describing changes and what they could possibly mean for the client or developer
- Created a high quality read me file using different methods to convey and display info

## CODE 🖥️

> EXAMPLE: of one of my function which helps add the features on

```Javascript
// function for the future 5 days condition
function futureCondition(lat, lon) {

    var futureURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=${apiKey}`;

    $.ajax({
        url: futureURL,
        method: "GET"
    }).then(function(futureResponse) {
        console.log(futureResponse);
        $("#fiveDay").empty();

        for (let i = 1; i < 6; i++) {
            var cityInfo = {
                date: futureResponse.daily[i].dt,
                icon: futureResponse.daily[i].weather[0].icon,
                temp: futureResponse.daily[i].temp.day,
                humidity: futureResponse.daily[i].humidity
            };

            var currDate = moment.unix(cityInfo.date).format("MM/DD/YYYY");
            var iconURL = `<img src="https://openweathermap.org/img/w/${cityInfo.icon}.png" alt="${futureResponse.daily[i].weather[0].main}" />`;

            var futureCard = $(`
                <div class="pl-3">
                    <div class="card pl-3 pt-3 mb-3 bg-primary text-light" style="width: 12rem;>
                        <div class="card-body">
                            <h5>${currDate}</h5>
                            <p>${iconURL}</p>
                            <p>Temp: ${cityInfo.temp} °C</p>
                            <p>Humidity: ${cityInfo.humidity}\%</p>
                        </div>
                    </div>
                <div>
            `);

            $("#fiveDay").append(futureCard);
        }
    });
}
```

## LINKS 🔗

[REPOSITARY](https://github.com/MarketingPlus/weather-dashboard/)

[WEBSITE](https://marketingplus.github.io/weather-dashboard/)
