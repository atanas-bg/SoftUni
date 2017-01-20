/**
 * Created by User on 30.11.2016 г..
 */
function attachEvents() {
    const locationsUrl = 'https://judgetests.firebaseio.com/locations.json';

    $('#submit').click(getWeather);

    function getWeather() {
        let weatherRequest = {
            method: 'GET',
            url: locationsUrl
        };
        $.ajax(weatherRequest)
            .then(displayWeatherInfo)
            .catch(displayError);

        let weatherSymbols = {
            'Sunny': String.fromCharCode(9728), //'&#x2600;',        // ☀
            'Partly sunny': String.fromCharCode(9925), //'&#x26C5;', // ⛅
            'Overcast': String.fromCharCode(9729), //'&#x2601;',     // ☁
            'Rain': String.fromCharCode(9748), //'&#x2614;',         // ☂
            'Degrees': String.fromCharCode(176) //'&#176;'         // °
        };

        function displayWeatherInfo(locations) {
            let searchedLocation = $('#location').val();
            let locationExists = false;
            for (let location of locations) {
                if (location.name === searchedLocation) {
                    let code = location.code;
                    locationExists = true;

                    // current condition
                    let currentCondition = $.ajax({
                        method: 'GET',
                        url: 'https://judgetests.firebaseio.com/forecast/today/' + code + '.json'
                    });

                    // 3 day forecast
                    let threeDaysForecast = $.ajax({
                        method: 'GET',
                        url: 'https://judgetests.firebaseio.com/forecast/upcoming/' + code + '.json'
                    });

                    Promise.all([currentCondition, threeDaysForecast])
                        .then(displayForecast)
                        .catch(displayError);

                    function displayForecast([current, upcoming]) {
                        $('#forecast').css('display', 'inline');
                        let currentLocationCondition = current.forecast.condition;
                        let conditionSymbol = weatherSymbols[currentLocationCondition];
                        let spanConditionSymbol = $('<span>').addClass('condition symbol').text(conditionSymbol);
                        let spanCondition = $('<span>').addClass('condition');
                        let currentLocationName = current.name;
                        let spanLocationName = $('<span>').addClass('forecast-data').text(currentLocationName);
                        let currentLocationTemps = `${current.forecast.low}${weatherSymbols['Degrees']}/${current.forecast.high}${weatherSymbols['Degrees']}`
                        let spanLocationTemps = $('<span>').addClass('forecast-data').text(currentLocationTemps);
                        let spanLocationCondition = $('<span>').addClass('forecast-data').text(currentLocationCondition);
                        spanCondition.append(spanLocationName)
                            .append(spanLocationTemps)
                            .append(spanLocationCondition);

                        $('#current .condition').remove();
                        $('#current').append(spanConditionSymbol)
                            .append(spanCondition);


                        let upcomingForecasts = upcoming.forecast;
                        $('#upcoming .upcoming').remove();
                        for (let forecast of upcomingForecasts) {
                            let upcomingCondition = forecast.condition;
                            let symbol = weatherSymbols[upcomingCondition];
                            let spanUpcoming = $('<span>').addClass('upcoming');
                            let spanSymbol = $('<span>').addClass('symbol').text(symbol);
                            let locationTemps = `${forecast.low}${weatherSymbols['Degrees']}/${forecast.high}${weatherSymbols['Degrees']}`
                            let spanLocTemps = $('<span>').addClass('forecast-data').text(locationTemps);
                            let spanLocCondition = $('<span>').addClass('forecast-data').text(upcomingCondition);
                            spanUpcoming.append(spanSymbol)
                                .append(spanLocTemps)
                                .append(spanLocCondition);

                            $('#upcoming').append(spanUpcoming)

                        }

                    }
                }
            }
            if (!locationExists) {
                displayError();
            }
        }

        function displayError(error) {
            $('#forecast').css('display', 'inline').text('Error');
        }
    }
}