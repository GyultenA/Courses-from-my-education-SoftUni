function factorialFound(firstNum, secondNum){

    function factorial (number){
        if (number === 0){
            return 1;
        } else {
            return number * factorial(number -1);
        }
    }
    let firstNumFactorial = factorial (firstNum);
    let secondNumFactorial = factorial(secondNum);
    let result = firstNumFactorial / secondNumFactorial;
    console.log (result.toFixed(2));

}

factorialFound(5,2);
