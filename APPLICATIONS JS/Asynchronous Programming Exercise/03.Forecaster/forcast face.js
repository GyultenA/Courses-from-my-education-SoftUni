function attachEvents() {
    const _weatherSymbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;',
    };
 
    const _htmlElements = {
        locationInput: _getElementById('location'),
        submitButton: _getElementById('submit'),
        forecastDiv: _getElementById('forecast'),
        currentDiv: _getElementById('current'),
        upcomingDiv: _getElementById('upcoming'),
    };
 
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster/';
 
    _htmlElements.submitButton.addEventListener('click', showsWeatherInfo);
 
    async function showsWeatherInfo() {
        _htmlElements.forecastDiv.style.display = 'block';
 
        try {
            const searchedLocationCode = await getSearchedLocationCode();
 
            showTodayWeatherInfo(searchedLocationCode);
 
            showUpcomingWeatherInfo(searchedLocationCode);
        } catch (_) {
            _htmlElements.forecastDiv.textContent = 'Error';
        }
    }
 
    function _getElementById(id) {
        return document.getElementById(id);
    }
 
    async function getData(url) {
        const response = await fetch(url);
 
        if (!response.ok) {
            throw new Error();
        }
 
        return await response.json();
    }
 
    async function getSearchedLocationCode() {
        const locationsData = await getData(baseUrl + 'locations');
 
        const searchedLocationInfo
            = locationsData.find(ld => ld.name === _htmlElements.locationInput.value);
 
        if (searchedLocationInfo === undefined) {
            throw new Error();
        }
 
        return searchedLocationInfo.code;
    }
 
    async function showTodayWeatherInfo(searchedLocationCode) {
        const todayWeatherData = await getData(baseUrl + `today/${searchedLocationCode}`);
        const forecast = todayWeatherData.forecast;
 
        _htmlElements.currentDiv.appendChild(
            _createSpanElement('div', 'forecasts', '', [
                _createSpanElement('span', 'condition symbol', _weatherSymbols[forecast.condition]),
                _createSpanElement('span', 'condition', '', [
                    _createSpanElement('span', 'forecast-data', todayWeatherData.name),
                    _createSpanElement('span', 'forecast-data', `${forecast.low}${_weatherSymbols.Degrees}/${forecast.high}${_weatherSymbols.Degrees}`),
                    _createSpanElement('span', 'forecast-data', forecast.condition),
                ]),
            ]));
    }
 
    async function showUpcomingWeatherInfo(searchedLocationCode) {
        const upcomingWeatherData = await getData(baseUrl + `upcoming/${searchedLocationCode}`);
 
        const forecastInfoDivElement = document.createElement('div');
        forecastInfoDivElement.classList.add('forecast-info');
 
        upcomingWeatherData.forecast
            .forEach(d => {
                forecastInfoDivElement.appendChild(
                    _createSpanElement('span', 'upcoming', '', [
                        _createSpanElement('span', 'symbol', _weatherSymbols[d.condition]),
                        _createSpanElement('span', 'forecast-data', `${d.low}${_weatherSymbols.Degrees}/${d.high}${_weatherSymbols.Degrees}`),
                        _createSpanElement('span', 'forecast-data', d.condition),
                    ]),
                );
            });
        
        _htmlElements.upcomingDiv.appendChild(forecastInfoDivElement);
    }
 
    function _createSpanElement(tagName, className, textContent, children = []) {
        const element = document.createElement(tagName);
        element.className = className;
 
        if (textContent !== '') {
            element.innerHTML = textContent;
        }
 
        children
            .forEach(ch => element.appendChild(ch));
 
        return element;
    }
}
 
attachEvents();