function transportPrice (input) {
    let km = Number (input[0]);
    let day = input[1];
    let priceTransport = 0;

    if (day === "day"){
        let taxiPriceDay = 0.70 + (0.79* km);
        priceTransport = taxiPriceDay
        
    }else{
        let taxiPriceNight = 0.70 + (0.90 * km);
        priceTransport= taxiPriceNight
    }


    if (km < 20){
        console.log (priceTransport);
    } else if (km >= 20){
        let busPrice  = 0.09 * km;
        priceTransport = busPrice
        console.log (priceTransport);
    }else if ( km >= 100){
        let trainPrice = 0.06 * km;
        priceTransport = trainPrice;
        console.log (priceTransport);
    }
  
    

}

transportPrice (["180", "night"]);