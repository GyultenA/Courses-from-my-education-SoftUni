function operationBeetween (input){
   let num1 = Number (input[0]);
   let num2 = Number (input[1]);
   let operator = input[2];

   let result = 0;
   let evenOrOld = 0;

   switch (operator){
    case "+": result = num1 + num2;
     if (result % 2 === 0) {
        evenOrOld = "even";
     } else {
        evenOrOld = "odd";
     }
     console.log (`${num1} ${operator} ${num2} = ${result} - ${evenOrOld}`);
    break;

    case "-": result = num1 - num2;
    if (result % 2 === 0) {
       evenOrOld = "even";
    } else {
       evenOrOld = "odd";
    }
    console.log (`${num1} ${operator} ${num2} = ${result} - ${evenOrOld}`);

    break;

    case "*": result = num1 * num2;
    if (result % 2 === 0) {
       evenOrOld = "even";
    } else {
       evenOrOld = "odd";
    }
    console.log (`${num1} ${operator} ${num2} = ${result} - ${evenOrOld}`);

    break;

    case "/": 
    if ( num2 === 0){
        console.log (`Cannot divide ${num1} by zero`);
    } else {
        result = num1 / num2;
        console.log (`${num1} ${operator} ${num2} = ${result.toFixed(2)}`);
    }

    break;

    case "%":
        if ( num2 === 0){
            console.log (`Cannot divide ${num1} by zero`);
        } else {
            result = num1 % num2;
            console.log (`${num1} ${operator} ${num2} = ${result}`);
    break;
   }
}
}


operationBeetween(["10","0","%"]);
