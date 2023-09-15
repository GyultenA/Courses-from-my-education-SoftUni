function simpleCalculator(num1, num2, operator) {
    let myMulty = (a, b) => a * b;
    let myDivide = (a, b) => a / b;;
    let addOperator = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let result = 0;

    switch (operator) {
        case "multiply": result = myMulty(num1, num2); break;
        case "divide": result = myDivide(num1, num2); break
        case "add": result = addOperator(num1, num2); break;
        case "subtract": result = subtract(num1, num2); break;
    }
    console.log(result);

}

simpleCalculator(5, 5, 'multiply');