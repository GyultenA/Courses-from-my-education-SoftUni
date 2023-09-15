function toyShop(input) {
    let vacation = Number (input[0]);
    let puzelsCount = Number (input[1]);
    let dollsCount = Number (input[2]);
    let bearsCount = Number (input[3]);
    let minionsCount = Number (input[4]);
    let trucksCount = Number (input[5]);
    
    let earnedMoney = (puzelsCount * 2.60)+ (dollsCount * 3)+ (bearsCount * 4.10)+ (minionsCount * 8.20)+ (trucksCount * 2);
    let totalCount = puzelsCount +dollsCount + bearsCount + minionsCount + trucksCount

    if (totalCount >= 50){
        earnedMoney = 0.75 * earnedMoney;
    }
    earnedMoney = 0.90 * earnedMoney

    if (earnedMoney >= vacation){
         let moneyLeft = earnedMoney - vacation
        console.log (`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    }else {
        let moneyNeeded = vacation - earnedMoney;
        console.log (`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }
}


toyShop (["40.8","20","25","30","50","10"]);

