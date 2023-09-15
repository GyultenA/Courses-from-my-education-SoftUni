function dishwasher(input) {
    let index = 0;

    let detergentCount = Number(input.shift())
    let detergentMl = detergentCount * 750;
    

    let dishCount = 0;
    let potsCount = 0;

    let command = input[index];
    index++;

    while (command != "End") {

        if (index % 3 === 0) {

            potsCount += Number(command);
        } else {
            dishCount += Number(command);
        }
  

        command = input[index];
        index++;
    }


    let sumDishMl = dishCount * 5;
    let sumPotsMl = potsCount * 15;

    let detergentMore = detergentMl - (sumDishMl + sumPotsMl);
    let detergentNeed = (sumDishMl + sumPotsMl) - detergentMl;

   

    if ((sumDishMl + sumPotsMl) <= detergentMl) {

        console.log("Detergent was enough!");
        console.log(`${dishCount} dishes and ${potsCount} pots were washed.`);
        console.log(`Leftover detergent ${detergentMore} ml.`);

    } else {
        console.log(`Not enough detergent, ${detergentNeed} ml. more necessary!`);
    }


}


dishwasher (["2", "53", "65", "55", "End"]);