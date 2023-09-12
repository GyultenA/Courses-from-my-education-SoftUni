function arrayModifier(input) {
    let myArray = input.shift().split(" ").map(Number);
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "end") {
        let wordCommand = command.split(" ");
        let modifier = wordCommand[0];
        let firstIndex = Number(wordCommand[1]);
        let secondIndex = Number(wordCommand[2]);

        switch (modifier) {

            case "swap":
                let number1 = myArray[firstIndex];
                let number2 = myArray[secondIndex]

                myArray.splice(firstIndex, 1, number2);
                myArray.splice(secondIndex, 1, number1);
                break;

            case "multiply":
                let firstElement = myArray[firstIndex];
                let secondElement = myArray[secondIndex];
                let result = firstElement * secondElement;
                myArray[firstIndex] = result;
                break;

            case "decrease":
                myArray = myArray.map(x => x - 1);
                break;   
               
        }

        command = input[index];
        index++;
    }


    console.log(myArray.join(", "));


}

arrayModifier(['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])
console.log("--------------")
arrayModifier(['1 2 3 4', 'swap 0 1', 'swap 1 2', 'swap 2 3', 'multiply 1 2', 'decrease', 'end'])