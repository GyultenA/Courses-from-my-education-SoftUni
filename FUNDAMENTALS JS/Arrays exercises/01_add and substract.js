function addAndSubtract(array) {

    let sumArray = 0;
    let newArraySum = 0;
    let newArray = [ ];
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let currNumber = Number(array[i]);
        sumArray += currNumber;


        if (currNumber % 2 === 0) {
            currNumber += i;
        } else {
            currNumber -= i;
        }

        newArraySum += currNumber;
        newArray[i]= currNumber;

    }

    console.log(newArray);
    console.log(sumArray);
    console.log(newArraySum);



}

addAndSubtract([5, 15, 23, 56, 35]);