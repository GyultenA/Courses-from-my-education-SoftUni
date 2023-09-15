function trainTheTrainers(input){
 let index = 0;
 let peopleCount = Number (input[index]);
 index++;

 let presantationCount = 0;
 let sumGrade = 0;
 let totalRates = 0;
 let presentation = "";

 let command = input[index];
 index++

    while (command !== "Finish"){
        presentation = command;
        presantationCount++;
      

          for ( let i = 0; i < peopleCount; i++){
            let grade = Number (input[index]);
            sumGrade += grade;
            index++;

            
          }
        

          if (command !== "Finish"){
            let avrgPresantGrade = sumGrade / peopleCount
            console.log (`${presentation} - ${avrgPresantGrade.toFixed(2)}.`)
         } 


         totalRates += sumGrade;
         sumGrade -= sumGrade;


        command = input[index];
        index++;


    }
    let avgGrade = totalRates / (presantationCount* peopleCount)
   console.log (`Student's final assessment is ${avgGrade.toFixed(2)}.`)

}

trainTheTrainers 
(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])

