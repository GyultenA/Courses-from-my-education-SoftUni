function godzillaKong (input) {
    let budget = Number (input[0]);
    let actorsCount = Number (input[1]);
    let clothesActorsPrice = Number (input[2]);

    let priceDecor = 0.1 * budget;
    let totalClothesPrice = actorsCount *clothesActorsPrice

    if (actorsCount > 150){
        totalClothesPrice = totalClothesPrice *0.90;
    }

    let totalPrice = priceDecor + totalClothesPrice;

    if (budget >= totalPrice){
        let left = budget - totalPrice;
        console.log (`Action!`);
        console.log (`Wingard starts filming with ${left.toFixed(2)} leva left.`)
    } else{
        let moneyNeeded = totalPrice - budget
        console.log (`Not enough money!`);
        console.log (`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    }
}

godzillaKong (["9587.88",
"222",
"55.68"])
;

