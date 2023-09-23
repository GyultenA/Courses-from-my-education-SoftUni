function solve(data) {
    let operationEnum = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
    }

    let result = []
    let numbers = [];
    let operators = [];

    for (let el of data) {
        if (typeof (el) === "number") {
            numbers.push(el);
        } else {
            operators.push(el);
        }
    }

    if (numbers.length <= operators.length) {
        console.log("Error: not enough operands!");
        return
    } else if (operators.length === 0 || numbers.length - 1 > operators.length) {
        console.log("Error: too many operands!");
        return
    }

    for (let el of data) {
        if (typeof (el) === "number") {
            result.push(el)
        } else {
            let numB = result.pop();
            let numA = result.pop();

            let sum = operationEnum[el](numA, numB);
          result.push(sum);
        }
    }
    return result.join()
}

console.log(solve([3, 4, '+']));
console.log(solve([5, 3, 4, '*', '-']));
console.log(solve([7, 33, 8, '-']));
console.log(solve([15, '/']));