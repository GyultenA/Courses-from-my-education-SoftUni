function condenseArray(arrNums) {

    while (arrNums.length > 1) {
        let condenseArray = [arrNums.length - 1];

        for (let i = 0; i < arrNums.length - 1; i++) {
            condenseArray[i] = Number(arrNums[i]) + Number(arrNums[i + 1]);
        }

        arrNums = condenseArray;
    }

    console.log(arrNums[0]);

}

condenseArray([2, 10, 3]);

condenseArray([5, 0, 4, 1, 2]);