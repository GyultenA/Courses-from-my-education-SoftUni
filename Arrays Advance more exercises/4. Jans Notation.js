function jansNotation(input) {
    let result = [];
    let inputLength = input.length;
    let numberOne = 0;
    let numberTwo = 0;
    let index = 0;

    while (index < inputLength) {
        let currentItem = input[index];

        if (typeof currentItem === "number") {
            result.push(currentItem);
        } else {
            switch (currentItem) {
                case "+":
                    numberOne = result.pop();
                    numberTwo = result.pop();
                    result.push(numberTwo + numberOne);
                    break;
                case "-":
                    numberOne = result.pop();
                    numberTwo = result.pop();
                    result.push(numberTwo - numberOne);
                    break;
                case "*":
                    numberOne = result.pop();
                    numberTwo = result.pop();
                    result.push(numberTwo * numberOne);
                    break;
                case "/":
                    numberOne = result.pop();
                    numberTwo = result.pop();
                    result.push(numberTwo / numberOne);
                    break;
            }
        }
        index++;
    }

    if (typeof numberOne !== "number" || typeof numberTwo !== "number") {
        console.log("Error: not enough operands!");
    } else {
        if (result.length > 1) {
            console.log("Error: too many operands!");
        } else {
            console.log(result.join(""));
        }
    }

}

jansNotation([5, 3, 4,'*','-']);
jansNotation([3, 4, '+']);
jansNotation([7, 33, 8,'-']);