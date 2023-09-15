function backToThePast (input){
    let i = 0;
    let sumAmount = Number (input[i++]);
    let nYear = Number(input[i++]);

    let spendMoney = 0;
    let ivanOld = 17;


for (let i = 1800; i <= nYear; i++){
    if ( i % 2 === 0){
        spendMoney += 12000;
        ivanOld++;
  } else {
       ivanOld++
        spendMoney += 12000 + 50 * ivanOld;
  }
 
}

let moneyNeeded = spendMoney - sumAmount;
  let moneyMore = sumAmount - spendMoney;
  

 if (sumAmount >= spendMoney){
  console.log (`Yes! He will live a carefree life and will have ${moneyMore.toFixed(2)} dollars left.`)
 } else {
    console.log (`He will need ${Math.abs(moneyNeeded.toFixed(2))} dollars to survive.`);
 }

}


backToThePast (["100000.15", "1808"]);