function tournamentsBasketball (input){
    let index = 0;
    let diference = 0;
    let totalMatches = 0;
    let matchesWin = 0;
    let matchesLost = 0;


    let command = input[index];
    index++;

      while( command !== "End of tournaments"){
          let tourName = command;
          let countMach = Number (input[index]);

             for (let i = 1; i <= countMach; i++){
                index++;
                let firstPoints = Number (input[index]);
                
                index++;
                let secondPoints = Number (input[index]);
                


                  if ( firstPoints > secondPoints){
                    diference = firstPoints - secondPoints;
                    matchesWin++;
                    totalMatches++;

                    console.log (`Game ${i} of tournament ${tourName}: win with ${diference} points.`);

                  } else if (secondPoints > firstPoints){
                    diference = secondPoints - firstPoints;
                    matchesLost++;
                    totalMatches++;

                    console.log (`Game ${i} of tournament ${tourName}: lost with ${diference} points.`)
                  }

             }

         

          command = input [index];
          index++;

      }

   let percentWin = (matchesWin / totalMatches) * 100;
   let percentLost = (matchesLost / totalMatches) * 100;

   console.log (`${percentWin.toFixed(2)}% matches win`);
   console.log (`${percentLost.toFixed(2)}% matches lost`);


}

tournamentsBasketball 
(["Dunkers",
"2",
"75",
"65",
"56",
"73",
"Fire Girls",
"3",
"67",
"34",
"83",
"98",
"66",
"45",
"End of tournaments"])
