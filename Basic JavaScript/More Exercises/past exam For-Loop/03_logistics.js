function logistics (input){
 let index = 0;
 let countLoading = Number (input[index]);
 index++;

 let busLoading = 0;
 let truckLoading = 0;
 let trainLoading = 0;
 
 let totalTons = 0;

   for (let i = 1; i <= countLoading; i++){
       let tons = Number (input[index]);
       totalTons += tons;

            if ( tons <= 3){
                let priceBus = tons * 200;
                busLoading += tons;
            } else if (tons <= 11){
                let truckPrice = tons * 175;
                truckLoading += tons;
            } else if (tons >= 12){
                 let trainPrice = tons * 120;
                 trainLoading += tons;
            }

            index++;

   }
   
     let totalLoading = ((busLoading * 200) + (truckLoading * 175) + (trainLoading * 120)) / totalTons;
     let busPercent = (busLoading / totalTons) * 100;
     let truckPercent = (truckLoading / totalTons) * 100;
     let trainPercent = (trainLoading / totalTons) * 100;
     
   console.log (`${totalLoading.toFixed(2)}`);
   console.log (`${busPercent.toFixed(2)}%`);
   console.log (`${truckPercent.toFixed(2)}%`)
   console.log (`${trainPercent.toFixed(2)}%`)



}

logistics (["4", "1", "5", "16", "3"])