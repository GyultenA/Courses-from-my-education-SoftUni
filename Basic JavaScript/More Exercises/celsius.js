function celsiustoFahrenheit(input) {
    let celsius = Number (input[0]);
    let f = (celsius * 9/5) + 32;
    console.log (f.toFixed(2));
}

celsiustoFahrenheit (["-5.5"]);