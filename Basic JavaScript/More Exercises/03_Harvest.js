function harvest(input) {
    let xVinegrape = Number(input[0]);
    let yGrape = Number(input[1]);
    let zWineLiters = Number(input[2]);
    let wokers = Number(input[3]);

    let totalGrapeVinegrade = xVinegrape * yGrape;
    let produceWine = (0.40 * totalGrapeVinegrade) / 2.5;

    if (produceWine < zWineLiters) {
        let neededWine = Math.floor(zWineLiters - produceWine);
        console.log(`It will be a tough winter! More ${neededWine} liters wine needed.`);
    } else {
        let moreWine = Math.floor(produceWine - zWineLiters);
        let winePerPerson = Math.floor(moreWine / wokers);
        console.log(`Good harvest this year! Total wine: ${produceWine} liters.`);
        console.log(`${moreWine} liters left -> ${winePerPerson} liters per person.`);
    }
}

harvest(["1020", "1.5", "425", "4"]);
