function cookingMasterclass(input) {
    let budget = Number(input[0]);
    let students = Number(input[1]);
    let priceFlour = Number(input[2]);
    let priceEgg = Number(input[3]);
    let priceApron = Number(input[4]);

    let neededApron = priceApron * Math.ceil((students + (students * 0.20)));

    let totalFlourCount = 0

    for (let i = 1; i <= students; i++) {
        totalFlourCount++;

        if (i % 5 === 0) {
            totalFlourCount--;

        }
    }

    let totalFlourPrice = priceFlour * totalFlourCount;
    let totalEggs = priceEgg * 10 * students;

    let totalCosts = neededApron + totalFlourPrice + totalEggs;


    if (totalCosts <= budget) {
        console.log(`Items purchased for ${totalCosts.toFixed(2)}$.`);
    } else {
        let neededMoney = totalCosts - budget;
        console.log(`${neededMoney.toFixed(2)}$ more needed.`);
    }



}

cookingMasterclass([50, 2, 1.0, 0.10, 10.0]);
console.log("---------");
cookingMasterclass([100, 25, 4.0, 1.0, 6.0]);
console.log('------');
cookingMasterclass([40, 2, 1.0, 0.10, 10.0])
