function secondsMins(input){
  let time1 = Number (input [0]);
  let time2 = Number (input [1]);
  let time3 = Number (input[2]);

  let sumTime = time1 + time2 + time3;
  let timeMin = Math.floor(sumTime/60);
  let timeSeconds = sumTime % 60;

  if (timeSeconds < 10) {
    console.log (`${timeMin}:0${timeSeconds}`);
  } else {
    console.log (`${timeMin}:${timeSeconds}`);
  }

}

secondsMins (["14", "12","10"]);

