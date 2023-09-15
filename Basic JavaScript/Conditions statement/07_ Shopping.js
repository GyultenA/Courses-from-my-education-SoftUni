function shopping(input) {
    let budget = Number (input[0]);
    let videoCardCount = Number (input[1]);
    let procesorCount = Number (input[2]);
    let ramCount = Number (input[3]);

    let totalCardPrice = videoCardCount * 250;
    let totalProcesor = (0.35 * totalCardPrice) * procesorCount;
    let ramPrice = (0.1 * totalCardPrice) * ramCount;

    let totalSpendedMoney = totalCardPrice + totalProcesor + ramPrice;

    if (videoCardCount > procesorCount){
        totalSpendedMoney= totalSpendedMoney * 0.85;
    }

    if(budget>= totalSpendedMoney){
        let leftMoney = budget - totalSpendedMoney;
        console.log(`You have ${leftMoney.toFixed(2)} leva left!`)
    }else {
        let moneyNeeded = totalSpendedMoney - budget;
        console.log (`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)
    }
}

shopping(["920.45","3","1","1"]);

