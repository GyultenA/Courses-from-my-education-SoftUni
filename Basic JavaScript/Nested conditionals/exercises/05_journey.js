function journey (input){
 let budget = Number (input [0]);
 let season = input [1];

 let holidaysPrice = 0;
 
 
    switch (season){
        case "summer": 
             if (budget <= 100){
               holidaysPrice *= 0.3;
               let type = "Camp"
               let spendedMoney = budget -holidaysPrice;
               console.log (Somewhere in Bulgaria);
               console.log (`${type} - ${spendedMoney.toFixed(2)}`)
             }
             


        break;
            }

        
        console.log (holidaysPrice)
}


journey (["50", "summer"]);
