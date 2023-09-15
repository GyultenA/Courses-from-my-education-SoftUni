function truckDriver (input){
  let season = input [0];
  let km = Number (input[1]);
   
  let priceSeason = 0;

  switch (season){
    case "Spring": 
    if ( km <= 5000){
        priceSeason = km * 0.75;
    } else if (km > 5000 && km <= 10000){
        priceSeason = km * 0.95;
    } else if(km > 10000 && km <= 20000){
        priceSeason = km * 1.45;
    }
    break;

    case "Summer":
        if ( km <= 5000){
            priceSeason = km * 0.90;
        } else if (km > 5000 && km <= 10000){
            priceSeason = km * 1.10;
        } else if(km > 10000 && km <= 20000){
            priceSeason = km *1.45;
        }

    break;

    case "Autumn":
        if ( km <= 5000){
            priceSeason = km * 0.75;
        } else if (km > 5000 && km <= 10000){
            priceSeason = km *0.95;
        } else if(km > 10000 && km <= 20000){
            priceSeason = km * 1.45;
        }
    break;

    case "Winter":
        if ( km <= 5000){
            priceSeason = km * 1.05;
        } else if (km > 5000 && km <= 10000){
            priceSeason = km * 1.25;
        } else if(km > 10000 && km <= 20000){
            priceSeason = km * 1.45;
        }
    break;

  }

    let totalAmount = (priceSeason * 4) * 0.90;
    console.log (totalAmount.toFixed(2));


}

truckDriver (["Spring", "16942"]);