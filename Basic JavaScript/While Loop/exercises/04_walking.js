function walking(input) {
    let index = 0;
    let sumSteps = 0;
    let command = input[index];
    index++;

    while (command !== "Going home" ) {
        let steps = Number(command);
        sumSteps += steps;

        if (sumSteps >= 10000) {
            let stepsMore = sumSteps - 10000;
            console.log(`Goal reached! Good job!`);
            console.log(`${stepsMore} steps over the goal!`);
            break;
        }

        command = input[index];
        index++;
    }


    if (command === "Going home") {
        let steps = Number(input[index]);
        sumSteps += steps;
    }
          if (sumSteps >= 10000) {
        let stepsMore = sumSteps - 10000;
        console.log (`Goal reached! Good job!`);
        console.log (`${stepsMore} steps over the goal!`)
         } else  {
        let stepsNeeded = 10000 - sumSteps;
        console.log (`${stepsNeeded} more steps to reach goal.`)
         }

}

walking (["1000",
"1500",
"2000",
"6500"])
