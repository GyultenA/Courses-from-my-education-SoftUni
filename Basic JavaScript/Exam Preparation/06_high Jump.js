function highJump (input){
  let highJumpWanted = Number (input[0]);

  
  let index = 1;
  let countJump = 0;
  let startJump = highJumpWanted - 30;
  let trying = 0;

  while (startJump <= highJumpWanted){
     let currentJump =  Number (input[index]);

         if (currentJump > startJump){
            startJump += 5;
            trying = 0;
         } else {
            trying++;
         }

       countJump++;

       if (trying === 3){
        break;
       }

       index++;

  }

  if (trying === 3){
    console.log (`Tihomir failed at ${startJump}cm after ${countJump} jumps.`)
  } else {
    console.log (`Tihomir succeeded, he jumped over ${highJumpWanted}cm after ${countJump} jumps.`)
  }

    



}

highJump (["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"])


