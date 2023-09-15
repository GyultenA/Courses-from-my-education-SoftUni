function movieStars (input){
  let budget = Number (input.shift());

  let actorName = input.shift();

   while (actorName !== "ACTION"){
       
      if (actorName.length > 15){
        budget -= budget * 0.20;
      } else {
        let salary = Number (input.shift());
        budget -= salary;
      }

      if (budget < 0){
        break;
      }

       actorName = input.shift();
   }

   if (actorName === "ACTION"){
    console.log (`We are left with ${budget.toFixed(2)} leva.`)
   } else {
    console.log (`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`)
   }



}

movieStars (["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"])	

