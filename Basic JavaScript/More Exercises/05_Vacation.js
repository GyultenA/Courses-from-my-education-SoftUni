function vacation (input){
  let budget = Number (input[0]);
  let season = input[1];
  let vacationPrice =0;

  if (budget <= 1000 && season === "Summer"){
      vacationPrice = budget * 0.65;
      console.log (`Alaska - Camp - ${vacationPrice.toFixed(2)}`)
  } else if ( budget <= 1000 && season === "Winter"){
      vacationPrice = budget * 0.45;
      console.log (`Morocco - Camp - ${vacationPrice.toFixed(2)}`)

  } else if (budget <= 3000 && season === "Summer") {
    vacationPrice = budget *0.80;
    console.log (`Alaska - Hut - ${vacationPrice.toFixed(2)}`)
  } else if ( budget <= 3000 && season === "Winter"){
    vacationPrice = budget * 0.60;
    console.log (`Morocco - Hut - ${vacationPrice.toFixed(2)}`);

  } else if (budget > 3000 && season === "Summer") {
    vacationPrice = budget *0.90;
    console.log (`Alaska - Hotel - ${vacationPrice.toFixed(2)}`);
  } else if ( budget > 3000 && season === "Winter"){
    vacationPrice = budget * 0.90;
    console.log (`Morocco - Hotel - ${vacationPrice.toFixed(2)}`);

  }
}

vacation (["2543.99", "Winter"]);