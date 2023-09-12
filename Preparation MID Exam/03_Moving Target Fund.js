function movingTarget(input) {
    let target = input.shift().split(" ").map(Number);

    let index = 0;
    let command = input[index];
    index++;

    while (command !== "End") {
        let arrayCommand = command.split(" ");
        let wordCommand = arrayCommand[0];
        let indexElement = Number(arrayCommand[1]);

        switch (wordCommand) {

            case "Shoot":
                if (indexElement >= 0 && indexElement < target.length) {
                    let power = Number(arrayCommand[2]);
                    target[indexElement] -= power;
                }
                if (target[indexElement] <= 0) {
                    target.splice(indexElement, 1)
                }

                break;

            case "Add":
                let value = Number(arrayCommand[2]);

                if (indexElement >= 0 && indexElement < target.length) {
                    target.splice(indexElement, 0, value);
                } else {
                    console.log("Invalid placement!");
                }
                break;

            case "Strike":
                let radius = Number(arrayCommand[2]);
                let startIndex = indexElement - radius;
                let endIndex = (radius * 2) +1;
                if(startIndex >= 0 && (radius + indexElement) < target.length){
                    target.splice(startIndex,endIndex);
                } else {
                    console.log("Strike missed!");
                }
                
            break;

        }


        command = input[index];
        index++;

    }


    console.log(target.join("|"))


}

movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);
console.log("-----------");
movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"])
