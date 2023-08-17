function bombNumbers(sequenceNumbers, bomb) {
    let specialNumber = bomb[0];
    let powerNumber = bomb[1];
    let indexSpecial = sequenceNumbers.indexOf(specialNumber);

    let deleteNum= sequenceNumbers.splice(indexSpecial, powerNumber);

    



    console.log(sequenceNumbers)
    console.log(deleteNum)





}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])