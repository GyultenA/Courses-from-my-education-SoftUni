function averageNumber(input) {
    let index = 0;
    let n = Number(input[index++]);
    let sum = 0;
 
    while (index <= n) {
        let currentNum = Number(input[index++]);
        sum += currentNum;
    }
 
    let avgSum = sum / n;
    console.log(avgSum.toFixed(2));
}

averageNumber (["2", "6", "4"]);