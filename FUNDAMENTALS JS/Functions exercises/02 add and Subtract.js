function addSubtract(num1, num2, num3) {

    function sum(num1, num2) {
        return num1 + num2;
    }
    let sumResult = sum(num1, num2)

    function subtract(sum, num3) {
        return sum - num3
    }
    return subtract(sumResult, num3);
}

console.log(addSubtract(23, 6, 10));