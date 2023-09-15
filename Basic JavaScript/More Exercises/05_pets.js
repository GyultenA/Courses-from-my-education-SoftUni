function pets (input) {
    let dayCount = Number (input[0]);
    let foodKg = Number (input[1]);
    let dogFoodKg = Number  (input[2]);
    let catFoodKg =Number (input[3]);
    let turtleFoodGrams = Number (input[4]);

    let turtleFoodKg = turtleFoodGrams / 1000;

    let totalFoodNeeded = (dayCount * dogFoodKg) + (dayCount * catFoodKg) + (dayCount * turtleFoodKg);

    if (totalFoodNeeded < foodKg){
        let foodLeft = Math.floor (foodKg - totalFoodNeeded);
        console.log (`${foodLeft} kilos of food left.`)
    } else {
        let foodWant = Math.ceil (totalFoodNeeded - foodKg);
        console.log (`${foodWant} more kilos of food are needed.`);

    }
}

pets (["5", "10", "2.1", "0.8", "321"]);