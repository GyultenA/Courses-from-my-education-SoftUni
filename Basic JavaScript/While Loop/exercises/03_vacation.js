function vacation(input){
    let index = 0
    let moneyNeeded = Number (input[index]);
    index++;
    let currentMoney = Number (input[index]);
    index++;

    let spendCount = 0;
    let isPossibleToSaveMoney = true;
    let dayCount = 0;


    while (moneyNeeded > currentMoney){

       let action = input [index];
       index++;
       let tempMoney = Number (input[index]);
       index++;
       dayCount++;


  switch (action){
    case "spend":
        spendCount++;
        currentMoney -= tempMoney;
        
        if (currentMoney < 0) {
            currentMoney = 0;
        }
        if (spendCount === 5){
            isPossibleToSaveMoney = false

        }
        break;

        case "save":
          currentMoney += tempMoney;
          spendCount = 0;
          break;
  }

if (!isPossibleToSaveMoney){
    break;
}

    }


if (isPossibleToSaveMoney){
  console.log (`You saved the money for ${dayCount} days.`)
  
} else {
    console.log (`You can't save the money.`)
    console.log (`${dayCount}`)

}
}


vacation (["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
