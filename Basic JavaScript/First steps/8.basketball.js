function feeBasketball (input) {
    let days = Number (input[0]);
    let shoes = days - (days * (40 / 100));
    let team = shoes - (shoes * (20 / 100));
    let ball = (1 / 4) * team;
    let accesories = (1 / 5) * ball;

    let equiment = days + shoes + team + ball + accesories;
    console.log(equiment);
}

feeBasketball(["365"]);
