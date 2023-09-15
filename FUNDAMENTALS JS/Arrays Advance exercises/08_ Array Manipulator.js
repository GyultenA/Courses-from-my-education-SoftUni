function arrayManipulator(input, stringCommand) {

    for (let element of stringCommand) {
        let command = element.split(" ");

        if (command[0] === "add") {
            let index = Number(command[1]);
            let currenNumber = Number(command[2]);
            input.splice(index, 0, currenNumber);

        } else if (command[0] === "addMany") {
            let currIndex = Number(command[1]);
            command.splice(0, 2);
            let numbersAdd = command.map(Number);
            input.splice(currIndex, 0, ...numbersAdd);

        } else if (command[0] === "contains") {
            let indexPrint = Number(command[1]);
            console.log(input.indexOf(indexPrint));

        } else if (command[0] === "remove") {
            let indexRemove = Number(command[1]);
            input.splice(indexRemove, 1);

        } else if (command[0] === "shift") {
            let indexPositions = Number(command[1]);


            for (let i = 1; i <= indexPositions; i++) {
                let element = input.shift();
                input.push(element);
            }

        } else if (command[0] === "sumPairs") {
            let newArray = [];
            
            if (input.length % 2 !== 0){
                input.push(0);
            }

            for (let j = 0; j < input.length; j += 2) {
                let sum = input[j] + input[j + 1];
                newArray.push(sum);
            }

            input = newArray;

        } else if (command[0] === "print") {
            console.log(`[ ${input.join(", ")} ]`);
        }


    }


}




arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);
console.log("---------------");
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
console.log("--------------");
arrayManipulator([2, 2, 4, 2, 4]
["add 1 4", "sumPairs", "print"])