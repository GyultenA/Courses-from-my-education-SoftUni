function dishwasher(input) {
    let bottlesWithdetergent = Number(input.shift());
    let DetergentOwned = bottlesWithdetergent * 750;
    let DetergentNeeded = 0;
    let plates = 0;
    let pots = 0;
    let counter = 1;
   
    while (true) {
      let command = input.shift();
      if (command === "End") {
        break;
      }
      if (counter % 3 === 0) {
        DetergentNeeded += command * 15;
      } else {
        DetergentNeeded += command * 5;
      }
      if (DetergentNeeded > DetergentOwned) {
        break;
      }
      if (counter % 3 === 0) {
        pots += Number(command);
      } else {
        plates += Number(command);
      }
      counter++;


    }
    if (DetergentNeeded <= DetergentOwned) {
      console.log(`Detergent was enough!`);
      console.log(`${plates} dishes and ${pots} pots were washed.`);
      console.log(
        `Leftover detergent ${Math.abs(DetergentOwned - DetergentNeeded)} ml.`
      );
    } else {
      console.log(
        `Not enough detergent, ${Math.abs(
          DetergentNeeded - DetergentOwned
        )} ml. more necessary!`
      );
    }
  }


dishwasher
/// (["2", "53", "65", "55", "End"]);
///console.log (------------------);

(["1", "10", "15", "10", "12", "13", "30"])