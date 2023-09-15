function circle (input) {
    let circleRadius = Number (input[0]);
    let calculatedArea = circleRadius * circleRadius * Math.PI

    let calculatedParameter = circleRadius * Math.PI * 2

    console.log (calculatedArea.toFixed(2));
    console.log ( calculatedParameter.toFixed(2));

}

circle (["3"]);