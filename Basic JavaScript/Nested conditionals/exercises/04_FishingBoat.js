function fishingBoat (input){
  let budget = Number (input[0]);
  let season =input[1];
  let fisherman = Number (input[2]);

   let totalPrice = 0;

   switch (season){

      case "Spring": totalPrice=3000;
        if (fisherman > 0 && fisherman <= 6){
            totalPrice *=0.9;
        } else if ( fisherman >= 7 && fisherman <= 11){
            totalPrice *= 0.85;
        } else if (fisherman >= 12){
            totalPrice *= 0.75
        }
      break;

      case "Summer": totalPrice = 4200; 
      if (fisherman > 0 && fisherman <= 6){
        totalPrice *=0.9;
    } else if ( fisherman >= 7 && fisherman <= 11){
        totalPrice *= 0.85;
    } else if (fisherman >= 12){
        totalPrice *= 0.75
    }
      break;

      case "Autumn": totalPrice = 4200;
      if (fisherman > 0 && fisherman <= 6){
        totalPrice *=0.9;
    } else if ( fisherman >= 7 && fisherman <= 11){
        totalPrice *= 0.85;
    } else if (fisherman >= 12){
        totalPrice *= 0.75
    }
       break;
      case "Winter": totalPrice = 2600; 
      if (fisherman <= 6){
        totalPrice *=0.9;
    } else if ( fisherman >= 7 && fisherman <= 11){
        totalPrice *= 0.85;
    } else if (fisherman >= 12){
        totalPrice *= 0.75
    }
      break;
   }

   if (fisherman % 2 ===0 && (season === "Spring" || season === "Summer" || season === "Winter")){
    totalPrice *= 0.95
   }

   if (budget >= totalPrice){
    let moneyLeft = budget - totalPrice;
   console.log (`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
} else {
   let moneyNeeded = totalPrice - budget;
   console.log (`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
}



}

fishingBoat(["2000",
"Winter",
"13"])



