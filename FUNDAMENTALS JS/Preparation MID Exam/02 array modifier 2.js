function arrayModifier(input) {
    let myArray = input.shift().split(" ").map(Number);

    for (let i = 0; i < input.length; i++) {
       // let currentComand = input[i].split(" ");
        //let command = currentComand.shift();
        //let firstIndex = Number(currentComand.shift());
       // let secondIndex = Number(currentComand.shift());

        let [command,firstIndex,secondIndex] = input[i].split(" ");

        switch (command) {

            case "swap":
                let number1 = myArray[firstIndex];
                myArray[firstIndex] = myArray[secondIndex]
                myArray[secondIndex] = number1;
                break;

            case "multiply":
                let result = myArray[firstIndex] * myArray[secondIndex];
                myArray[firstIndex] = result;
                break;

            case "decrease":
                myArray = myArray.map(x => x - 1);
                break;

            case "end":
                break;

        }

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

