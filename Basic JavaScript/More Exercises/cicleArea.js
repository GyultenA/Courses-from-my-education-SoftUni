function circle (input) {
    let circleRadius = Number (input[0]);
    let circleArea = circleRadius * circleRadius * Math.PI

    let perimeter = circleRadius * Math.PI * 2

    console.log (`calculated area`, circleArea.toFixed(2));
    console.log (`calculated parameter`, perimeter.toFixed(2));

}

circle (["3"]);
