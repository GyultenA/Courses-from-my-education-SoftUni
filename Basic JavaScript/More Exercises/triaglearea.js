function areaTr(input) {
    let sideA = Number (input[0]);
    let high = Number (input[1]);
    let area = (sideA * high) / 2

    console.log (area.toFixed(2));
}

areaTr (["7.75", "8.45"]);