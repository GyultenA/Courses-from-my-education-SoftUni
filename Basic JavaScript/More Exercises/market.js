function market(input) {
    let vegetablePrice = Number (input[0]);
    let fruitPrice = Number (input[1]);
    let kgVegitables = Number (input[2]);
    let kgFruit = Number (input[3]);

    let profit = ((vegetablePrice*kgVegitables) + (fruitPrice*kgFruit)) / 1.94;
    console.log (profit.toFixed(2));
}

market (["0.194", "19.4", "10", "10"])