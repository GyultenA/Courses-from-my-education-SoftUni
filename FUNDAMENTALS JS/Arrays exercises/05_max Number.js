function maxNumber(array) {

    let arrayLength = array.length;
    let result = "";

    for (let i = 1; i <= arrayLength; i++) {

        let currNumber = Number(array[i - 1]);
        let isMax = true;

        for (let j = i; j < arrayLength; j++) {

            let nextNumber = Number(array[j]);

            if (nextNumber >= currNumber) {
                isMax = false;
                break;
            }

           }

        if (isMax) {
            result += `${currNumber} `;

        }

    }


    console.log(result)
}

maxNumber([1, 4, 3, 2]);