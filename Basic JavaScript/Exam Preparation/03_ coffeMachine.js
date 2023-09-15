function coffeeMachine (input){
 let typeDrink = input[0];
 let typeSugar = input[1];
 let countDrink = Number (input[2]);

 let totalSum = 0;

 switch (typeDrink) {
    case "Espresso": 
        switch (typeSugar){
             case "Without": totalSum = (countDrink * 0.90) *0.65; break;
             case "Normal": totalSum = (countDrink * 1);break;
             case "Extra": totalSum = (countDrink * 1.20); break;   
        }
        break;

    case "Cappuccino": 
        switch (typeSugar){
             case "Without": totalSum = (countDrink * 1); break;
             case "Normal": totalSum = (countDrink * 1.20);break;
             case "Extra": totalSum = (countDrink * 1.60); break;   
        }
        break;

    case "Tea": 
        switch (typeSugar){
             case "Without": totalSum = (countDrink * 0.50); break;
             case "Normal": totalSum = (countDrink * 0.60);break;
             case "Extra": totalSum = (countDrink * 0.70); break;   
        }
        break;

 }
 
       if ( typeDrink === "Espresso" && countDrink >= 5){
         totalSum = totalSum * 0.75;
       }

       if (totalSum >= 15){
        totalSum = totalSum * 0.80;
       }

       console.log (`You bought ${countDrink} cups of ${typeDrink} for ${totalSum.toFixed(2)} lv.`)

}

coffeeMachine (["Tea",
"Extra",
"3"])


