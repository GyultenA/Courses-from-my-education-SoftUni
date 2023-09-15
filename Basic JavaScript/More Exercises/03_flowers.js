function flowers (input){
 let chrysanthemums = Number (input[0]);
 let roses = Number (input[1]);
 let tulips = Number (input[2]);
 let season = input [3];
 let daySpecial = input [4];


 let totalFlowersPrice = 0;
 let totalFlowers = chrysanthemums + roses + tulips;

    if ( season === "Spring" || season === "Summer"){
        totalFlowersPrice = chrysanthemums * 2 + roses * 4.10 + tulips * 2.50;
    } else if (season === "Autumn" || season === "Winter" ) {
        totalFlowersPrice = chrysanthemums * 3.75 + roses * 4.50 + tulips * 4.15;
    }

    if ( daySpecial === "Y"){
        totalFlowersPrice = totalFlowersPrice * 1.15;
    } 

    if ( season === "Spring" && tulips > 7){
        totalFlowersPrice  *= 0.95;
    } else if ( season === "Winter" && roses >= 10){
        totalFlowersPrice *= 0.90;
    } 
    
       if ( totalFlowers > 20 ){
        totalFlowersPrice *= 0.80;
    }
      
           totalFlowersPrice += 2


 console.log (totalFlowersPrice.toFixed(2));

}

flowers (["3", "10", "9", "Winter", "N"]);

