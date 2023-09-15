function equalSum(array) {
    let arrayLength = array.length;
    let leftSum = 0;
    let rigthSum = 0;
    let isEqual = false;

    for (let currentI = 0; currentI < arrayLength; currentI++) {

        for (let i = 0; i < arrayLength; i++) {


            if (i !== currentI) {
                let num = Number(array[i])

                if (currentI > i) {
                    leftSum += num;
                } else if (currentI < i) {
                    rigthSum += num
                }

            }

            if (currentI === 0) {
                leftSum = 0;
            } else if (currentI === arrayLength - 1) {
                rigthSum = 0;
            }
        }

        if (leftSum === rigthSum) {
            console.log(currentI);
            isEqual = true;
        } else {
            leftSum = 0;
            rigthSum = 0;
        }


    }


if (!isEqual) {
    console.log("no");
}
}




equalSum([1, 2, 3, 3]);