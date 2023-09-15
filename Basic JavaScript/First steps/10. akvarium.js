function fishTank (input) {
   let length = Number (input[0])
   let wigth = Number (input[1]);
   let h = Number (input[2]);
   let percentFilled = Number (input[3]) / 100;

   let totalVolume = (length * wigth * h) / 1000;
let volumeTaken = percentFilled * totalVolume;

let freeVolum = totalVolume - volumeTaken;
console.log(freeVolum);
}

fishTank (["85", "75", "47","17"]);

