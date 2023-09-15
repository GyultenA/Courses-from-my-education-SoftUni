function sumDigits(number) {
    let numberString = number.toString();
    let sum = 0;

    for (let i = 0; i < numberString.length; i++) {
        let currentNum = Number(numberString[i]);
        sum += currentNum;
    }

    console.log(sum);

}

sumDigits(245678);