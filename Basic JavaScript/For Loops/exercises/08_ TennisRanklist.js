function tennisRanklist (input){
let tournamentsCount = Number (input[0]);
let startingPoints = Number (input[1]);

let pointsWon = 0;
let tournamenstWon = 0

for (let i = 2; i < input.length; i++){
     let tournamentResult = input[i];

     if (tournamentResult === "W"){
        pointsWon += 2000;
        tournamenstWon++;
     } else if ( tournamentResult === "F"){
        pointsWon += 1200;

     }else {
        pointsWon += 720;
     }
}
 let avrgPoints = Math.floor (pointsWon / tournamentsCount);
 let tournWonPercent = (tournamenstWon / tournamentsCount) * 100;

 console.log (`Final points: ${startingPoints + pointsWon}`);
 console.log (`Average points: ${avrgPoints}`);
 console.log (`${tournWonPercent.toFixed(2)}%`);


}

tennisRanklist(["5","1400","F","SF","W","W","SF"]);
