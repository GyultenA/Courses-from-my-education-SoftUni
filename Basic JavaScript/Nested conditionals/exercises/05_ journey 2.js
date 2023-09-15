function journey (input){
    let budget = Number (input [0]);
    let season = input [1];
   
    let holidaysPrice = 0;
    let type = "";
    let destination = "";

    if (budget <= 100){
        destination = "Bulgaria";
        if (season === "summer"){
            holidaysPrice = budget *0.30;
            type = "Camp"
        } else {
            holidaysPrice = budget * 0.70;
            type = "Hotel"
        }
    } else if ( budget <= 1000){
        destination = "Balkans";
        if (season === "summer"){
            holidaysPrice = budget *0.40;
            type = "Camp"
        }else {
            holidaysPrice = budget *0.80;
            type = "Hotel"
        }
    } else if ( budget > 1000) {
        destination = "Europe";
        holidaysPrice = budget * 0.90;
        type = "Hotel"
        
    }
     

     console.log (`Somewhere in ${destination}`);
     console.log (`${type} - ${holidaysPrice.toFixed(2)}`);

}

journey(["1500", "summer"]);