function cinemaTickets (input){
let  studentTicket = 0;
let standartTickets = 0;
let kidsTicket = 0;

let index = 0;
let command = input [index];
index++;

while (command !== "Finish"){
     let movieName = command;

     let freePlace = Number (input[index]);
     index++;

     let command1 = input[index];
     index++;

     let placesTaken = 0;

          while (command1 !== "End"){
             let ticketType = command1;
             placesTaken++;
               
             if (ticketType === "student"){
                studentTicket++;
             }else if (ticketType === "standard"){
                standartTickets++;
             } else if (ticketType === "kid"){
                kidsTicket++;
             }

                if (placesTaken === freePlace){
                    break;
                }

                 command1 = input[index];
                 index++;

             }


             let percentTaken = (placesTaken / freePlace) * 100;
             console.log (`${movieName} - ${percentTaken. toFixed(2)}% full.`)



          


    command = input[index];
    index++;
}

  let totalTickets = studentTicket + standartTickets + kidsTicket;
 console.log (`Total tickets: ${totalTickets}`);

 let studentPercent = (studentTicket / totalTickets) * 100
 console.log (`${studentPercent.toFixed(2)}% student tickets.`)

   let standartPercent = (standartTickets / totalTickets) * 100;
   console.log (`${standartPercent.toFixed(2)}% standard tickets.`);

   let kidsPercent = (kidsTicket / totalTickets)* 100
   console.log (`${kidsPercent.toFixed(2)}% kids tickets.`)

}
cinemaTickets (["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
