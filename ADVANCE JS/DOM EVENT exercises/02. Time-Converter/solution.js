function attachEventsListeners() {
    let myButton = Array.from(document.querySelectorAll("input[type=button]")); //vsichki butoni

    const inputs = Array.from(document.querySelectorAll("input[type=text]")); // vsicki kydeto pishem

    myButton.forEach(button => button.addEventListener("click", onClickHeadler));

    function onClickHeadler(event) {
        //debugger
        let value = Number(event.target.parentElement.children[1].value);

        let unit = event.target.parentElement.children[1].id;

        switch (unit) {
            case "days": calculate(value); break;
            case "hours": calculate(value / 24); break;
            case "minutes": calculate(value / 24 / 60); break;
            case "seconds": calculate(value / 24 / 60 / 60); break;

        }

    }

    function calculate(value) {  // value === days
        // console.log(inputs)
        //debugger
        inputs[0].value = value;

        let currentValue = value * 24;  // value === hours

        for (let i = 1; i < inputs.length; i++) {
            let input = inputs[i];
            input.value = currentValue;
            currentValue *= 60; // value === minutes or sec
        }
        // console.log(inputs)
    }

}