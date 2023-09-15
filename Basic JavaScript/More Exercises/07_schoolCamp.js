function scholCamp (input){
  let season = input[0];
  let group = input [1];
  let studentCount = Number (input[2]);
  let nigthsCount = Number (input[3]);


  let stayPrice = studentCount  * nigthsCount;
  let totalAmount = 0;
  let sportsType = 0;

  switch (season){
     case "Winter":
        if (group === "boys"){
          totalAmount = stayPrice * 9.60;
          sportsType = "Judo"
        } else if (group === "girls"){
            totalAmount = stayPrice * 9.60;
            sportsType = "Gymnastics"
        } else {
            totalAmount = stayPrice * 10;
            sportsType = "Ski"
        }

     break;


     case "Spring":
        if (group === "boys"){
            totalAmount = stayPrice * 7.20;
            sportsType = "Tennis"
          } else if (group === "girls"){
              totalAmount = stayPrice * 7.20;
              sportsType = "Athletics"
          } else {
              totalAmount = stayPrice * 9.50;
              sportsType = "Cycling"
          }
     break;


     case "Summer":
        if (group === "boys"){
            totalAmount = stayPrice * 15;
            sportsType = "Football"
          } else if (group === "girls"){
              totalAmount = stayPrice * 15;
              sportsType = "Volleyball"
          } else {
              totalAmount = stayPrice * 20;
              sportsType = "Swimming"
          }
     break;
  }
   if (studentCount >= 50){
      totalAmount = totalAmount *0.50;
   } else if (studentCount >= 20 && studentCount < 50){
    totalAmount = totalAmount * 0.85;
   } else if (studentCount >= 10 && studentCount < 20 ){
    totalAmount = totalAmount * 0.95;
   }


console.log (`${sportsType} ${totalAmount.toFixed(2)} lv.`)


}

scholCamp (["Winter", "mixed", "9","15"]);
