function sumPrime(input) {
  let primeNumbersSum = 0;
  let nonPrimeSum = 0;
  let index = 0;
  let command = input[index];
  index++;

  


  while (command !== "stop") {
    let currentNum = Number(command);


    if (currentNum < 0) {
      console.log("Number is negative.");
      command = input[index];
      index++;
      continue;
    }

    let isPrime = true;

    for (let divisor = 2; divisor < currentNum; divisor++) {

      if (currentNum % divisor === 0) {
        isPrime = false;
        
      }

    }

    if (isPrime === true) {
      primeNumbersSum += currentNum;
    } else {
      nonPrimeSum += currentNum;
    }



    command = input[index];
    index++;

  }

  console.log(`Sum of all prime numbers is: ${primeNumbersSum}`)
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`)
}



sumPrime
  (["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])

