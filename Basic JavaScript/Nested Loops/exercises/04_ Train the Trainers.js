function trainTrainers (input){
   let totalRates = 0;
   let countRates = 0;
   let presantationCount = 0;
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Finish"){
        let peopleCount = Number (command);

        let command1 = input[index];
        index++;

          while (command1 !== "Finish"){
            let presentation = command1;
            presantationCount++;

                      for (let i = 0; i < peopleCount; i++){
                        let rate = Number (input[index]);
                        totalRates += rate;
                        countRates++;
                        index++;
                      }
            
            console.log (`${presentation} - ${(totalRates / peopleCount).toFixed(2)}.`);
               
                  

                  command1 = input[index++];
                  index++;
               }
               
          

        command = input[index];
        index++;
    }


 
  console.log (`Student's final assessment is ${(totalRates / presantationCount).toFixed(2)}.`)

}



trainTrainers 
(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
