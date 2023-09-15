function catWalking (input){
 let dayWalkMin = Number (input[0]);
 let countWalk = Number (input[1]);
 let calories = Number (input[2]);

 let totalWalkMin = dayWalkMin * countWalk;
 let burnCalories = totalWalkMin * 5;
 let totalCalories = calories * 0.50;

 if (burnCalories >= totalCalories){
    console.log (`Yes, the walk for your cat is enough. Burned calories per day: ${burnCalories}.`);
 } else {
    console.log (`No, the walk for your cat is not enough. Burned calories per day: ${burnCalories}.`);
 }


}

catWalking (["15",
"2",
"500"])
