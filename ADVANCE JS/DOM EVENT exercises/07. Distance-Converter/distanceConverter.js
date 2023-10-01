function attachEventsListeners() {
    let rates = { km: 1000, m: 1, cm: 0.01, mm: 0.001, mi: 1609.34, yrd: 0.9144, ft: 0.3048, in: 0.0254 };

    let btn = document.getElementById('convert');
    btn.addEventListener('click', convert);

    function convert(event) {
        let inputValue = document.getElementById('inputDistance').value;
        inputValue = Number(inputValue);
        let fromValue = document.getElementById('inputUnits').value;
        let toValue = document.getElementById('outputUnits').value;
        let outputValue = document.getElementById('outputDistance');
        console.log(inputValue)
        console.log(fromValue)
        console.log(rates)

        //outputValue.disabled = false;
        let result = inputValue * rates[fromValue]
        outputValue.value = result / rates[toValue];
        debugger
    }
}