function nonDecreasing(array) {

    let resultArray = [+array[0]];
    let check = +array[0];

    for (let i = 1; i < array.length; i++) {

        if (array[i] >= check) {
            resultArray.push(+array[i]);
            check = +array[i];
        }
    }
    console.log(resultArray.join(' '))

}

nonDecreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]);