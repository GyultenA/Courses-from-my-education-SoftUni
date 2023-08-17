function numberModification(number){
    let sumDigits = 0;
    let averageDigits = 0;
    let countNumber  = 0;

    let numberString = number.toString();
    let numberLength = numberString.length;

    for (let i = 0; i < numberLength; i++){
        let currNumber = Number (numberString[i]);
        countNumber ++;

        sumDigits += currNumber
        averageDigits = sumDigits / countNumber;

        if (averageDigits > 5){

        }

// nedowyrsheno]


    }

}

numberModification(101)