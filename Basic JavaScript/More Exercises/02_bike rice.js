function bikeRice (input){
 let youngCount = Number (input[0]);
 let oldCount = Number (input[1]);
 let route = input[2];

 
 let totalSum = 0;
 let participates = youngCount + oldCount;

  switch (route){
     case "trail":
        totalSum = ((youngCount * 5.50) + (oldCount * 7)) * 0.95;
        break;

    case "cross-country":
        if (participates >= 50 ){
            totalSum =((youngCount * 8 *0.75) + (oldCount * 9.50 *0.75)) * 0.95;
        }else {
            totalSum = ((youngCount * 8) + (oldCount * 9.50)) * 0.95;
        }
      break;

    case "downhill":
        totalSum = ((youngCount * 12.25) + (oldCount * 13.75)) * 0.95;
    break;

    case "road":
        totalSum = ((youngCount * 20) + (oldCount * 21.50)) * 0.95;
    break;
  }
   console.log (`${totalSum.toFixed(2)}`);

}

bikeRice (["21", "26", "cross-country"]);