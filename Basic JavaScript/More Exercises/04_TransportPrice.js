function transportPrice (input) {
    let km = Number (input[0]);
    let day = input[1];
  

    if (km < 20 && day === ("day")) {
        let taksiPrice = 0.70 + ( km * 0.79);
        console.log(taksiPrice.toFixed(2));

    }else if (km < 20 && day === ("night")) {
        let taksiPriceNight = 0.70 + (km * 0.90);
        console.log (taksiPriceNight.toFixed(2));

    }else if ( km < 100) {
        let bus = km * 0.09;
        console.log (bus.toFixed(2));

    } else if (km >= 100){
        let trainPrice = km * 0.06;
        console.log (trainPrice.toFixed(2));
    }


}

transportPrice (["5", "day"]);