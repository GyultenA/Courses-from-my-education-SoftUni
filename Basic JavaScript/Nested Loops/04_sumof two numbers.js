function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);

    let isFound = false;
    let firstNumber = 0;
    let secNumber = 0;
    let count = 0;

    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            let sum = x + y;
            count++;
            if (sum === magic) {
                firstNumber = x;
                secNumber = y;
                isFound = true
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
        if (isFound) {
            console.log(`Combination N:${count} (${firstNumber} + ${secNumber} = ${magic})`);
        } else {
            console.log(`${count} combinations - neither equals ${magic}`)
    
}
}

sumOfTwoNumbers(["88",
    "888",
    "2000"])
