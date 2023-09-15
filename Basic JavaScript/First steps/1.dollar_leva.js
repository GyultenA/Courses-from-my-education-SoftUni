function usdToBgn(input) {
    let dollars = Number (input[0]);
    // $1 = 1.79549
    // $2 = 2 * 1.79549
    // $5 = 5 * 1.79549
    let leva = dollars * 1.79549;
    console.log(leva);
}

usdToBgn(["22"]);