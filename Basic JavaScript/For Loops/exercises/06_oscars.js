function oskars (input){
   let nameActor = input[0]
   let academyPoints = Number (input[1]);
   let juryMembers = Number (input[2]);

   for (let i = 3; i < input.length; i += 2){
      let juryName = input [i];
      let juryPoints = Number (input [i + 1]);

      let poinsWon = (juryName.length * juryPoints) / 2
      academyPoints += poinsWon;

      if (academyPoints > 1250.50){
        console.log (`Congratulations, ${nameActor} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
        break;
       } 
     }

       if (academyPoints <= 1250.5){
           let pointsNeeded = 1250.5 - academyPoints;
         console.log (`Sorry, ${nameActor} you need ${pointsNeeded.toFixed(1)} more!`);
       }


   }

 


oskars (["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
