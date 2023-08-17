function sumEven(arr) {
    let sum = 0;

    for (let num of arr) {
        let currNumber = Number(num)

        sum += currNumber % 2 === 0 ? currNumber : 0;

    }

    console.log(sum);
}

sumEven(['1', '2', '3', '4', '5', '6'])