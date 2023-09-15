function sumPrime(input) {
    let index = 0;
    let command = input[index];
    index++;

    let primeNumbersSum = 0;
    let nonPrimeSum = 0;

    while (command !== "stop") {
        let currentNum = Number(command);

        if (currentNum < 0) {
            console.log("Number is negative.");
            command = input[index];
            continue;
        }

        isPrime = true;

        for (let d = 2; d < currentNum; d++) {
            if (currentNum % d === 0) {
                isPrime = false
            }

        }

        if (isPrime === true) {
            primeNumbersSum += currentNum
        } else {
            nonPrimeSum += currentNum
        }


    }


    console.log(primeNumbersSum);
    console.log(`ako $nonPrimeSum`)

    console.log (`${primeNumbersSum}`);
    console.log (`${nonPrimeSum}`)


}

sumPrime(["3", "9", "0", "7", "19", "4", "stop"])	