function skiTrip (input){
  let daysStay = Number (input[0]);
  let roomType = input [1];
  let rating = input [2];

  let stayPrice = 0;
  let nights = daysStay -1;

  switch (roomType){
    case "room for one person": stayPrice = nights * 18;
    break;

    case "apartment": stayPrice = nights * 25;

       if (nights < 10){
        stayPrice *=0.70;
       }else if (nights <= 15){
        stayPrice *= 0.65;
       } else {
        stayPrice *= 0.50;
       }

    break;

    case "president apartment" : stayPrice= nights * 35;

    if (nights < 10){
        stayPrice *=0.90;
       }else if (nights <= 15){
        stayPrice *= 0.85;
       } else {
        stayPrice *= 0.80;
       }

    break;
  }

  if (rating === "positive"){
     stayPrice *= 1.25;
  } else if ( rating === "negative"){
    stayPrice *= 0.90;
  }

  console.log (stayPrice.toFixed(2));

}

skiTrip(["30","president apartment","negative"])

