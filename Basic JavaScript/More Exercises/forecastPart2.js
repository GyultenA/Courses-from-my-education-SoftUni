function forecastPart(input) {
    let graduse = Number (input[0]);

    if (graduse>=26 && graduse<=35) {
        console.log ("Hot")
    }else if (graduse >= 20.1 && graduse<=25.9) {
        console.log ("Warm")
    } else if (graduse >=15 && graduse<=20) {
        console.log ("Mild")
    } else if (graduse >= 12 && graduse<=14.9){
        console.log ("Cool")
    } else if (graduse >=5 && graduse <=11.9){
        console.log ("Cold")
    } else [
        console.log ("unknown")
    ]
}

forecastPart (["0"]);
