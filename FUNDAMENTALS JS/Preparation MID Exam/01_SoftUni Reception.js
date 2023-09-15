function softuniReception(input) {
    let firstEmployee = Number(input[0]);
    let secondEmployee = Number(input[1]);
    let thirdEmployee = Number(input[2]);
    let studentsCount = Number(input[3]);

    let answerPerHour = firstEmployee + secondEmployee + thirdEmployee;
    let countHour = 0;

    while (studentsCount > 0) {
        countHour++;
        studentsCount -= answerPerHour

        if (countHour % 4 === 0) {
            countHour++;
        }
    }

    console.log(`Time needed: ${countHour}h.`)
}

softuniReception(['5', '6', '4', '20']);
console.log("-----------")
softuniReception(['1', '2', '3', '45']);
console.log("-------------")
softuniReception(['3', '2', '5', '40']);