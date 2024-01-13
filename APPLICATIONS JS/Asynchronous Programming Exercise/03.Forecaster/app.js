function attachEvents() {
    //console.log("TODO...");
    const inputLocation = document.querySelector("input#location")  // document.getElementById("location")
    const inputWeatherBtn = document.querySelector("input#submit") //document.getElementById("submit")
    const forecast = document.querySelector("div#forecast");
    const currentWeather = document.querySelector("div#current");
    const upcomingWeather = document.querySelector("div#upcoming");

    const conditions = {
        'Sunny': "&#x2600", // ☀
        'Partly sunny': "&#x26C5", // ⛅
        'Overcast': "&#x2601", // ☁
        'Rain': "&#x2614", // ☂
        'Degrees': "&#176"   // °
    }

    inputWeatherBtn.addEventListener("click", getWeather);


    function getWeather() {
        fetch("http://localhost:3030/jsonstore/forecaster/locations")
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                const cityIndex = data.findIndex(el => el.name === inputLocation.value)
                forecast.style.display = "block"
                if (cityIndex === -1) {
                    throw new Error()
                }
                let cityCode = data[cityIndex].code;
                console.log(cityCode)

                //current weather
                fetch(`http://localhost:3030/jsonstore/forecaster/today/${cityCode}`)
                    .then(res => res.json())
                    .then(data => {
                        // main div
                        const forcats = document.createElement("div");
                        forcats.className = "forecasts";
                        // condition symbol span
                        const contSymbol = document.createElement("span");
                        contSymbol.className = "condition symbol"
                        contSymbol.innerHTML = conditions[data.forecast.condition];
                        forcats.appendChild(contSymbol)

                        // condition info span
                        let condition = document.createElement("span");
                        condition.className = "condition";

                        // span1
                        const span1 = document.createElement("span");
                        span1.className = "forecast-data";
                        span1.textContent = data.name
                        condition.appendChild(span1);

                        //span2
                        const span2 = document.createElement("span");
                        span2.className = "forecast-data";
                        span2.innerHTML = `${data.forecast.low}&#176;/${data.forecast.high}&#176;`;
                        condition.appendChild(span2)

                        //span3
                        const span3 = document.createElement("span");
                        span3.className = "forecast-data";
                        span3.textContent = data.forecast.condition;
                        condition.appendChild(span3);

                        forcats.appendChild(condition);
                        currentWeather.appendChild(forcats)
                    });

                //upcomming weather
                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${cityCode}`)
                    .then(res => res.json())
                    .then(data => {
                        //main div
                        const fcInfo = document.createElement("div");
                        fcInfo.className = 'forecast-info'

                        //each day from array spans
                        data.forecast.forEach(el => {
                            //main span
                            const upcomingSpan = document.createElement("span");
                            upcomingSpan.className = "upcoming";

                            //stmbol span
                            const symbolSpan = document.createElement("span")
                            symbolSpan.className = "symbol"
                            symbolSpan.innerHTML = conditions[el.condition];
                            upcomingSpan.appendChild(symbolSpan);

                            //forecast date first span
                            const spanDate1 = document.createElement("span");
                            spanDate1.className = "forecast-data";
                            spanDate1.innerHTML = `${el.low}&#176;/${el.high}&#176;`;
                            upcomingSpan.appendChild(spanDate1);

                            // forecast date two
                            const spanDate2 = document.createElement("span");
                            spanDate2.className = "forecast-data";
                            spanDate2.innerHTML = el.condition;
                            upcomingSpan.appendChild(spanDate2);

                            fcInfo.appendChild(upcomingSpan)
                        });

                        upcomingWeather.appendChild(fcInfo)


                    })
                    .catch(() => (forecast.textContent = "Error"))


            })
            .catch(() => (forecast.textContent = "Error"))

    }
}

attachEvents();