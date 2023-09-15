function processOddNum(arr) {
    let oddArray = arr.filter((el, i) => i % 2 !== 0);
    let result = oddArray.map(x => x * 2);

    console.log(result.reverse().join(" "));

    let resultTwo = arr
        .filter((num, i) => i % 2 == 1)
        .map(x => 2 * x)
        .reverse();
    return console.log(resultTwo.join(' '));
    

}

processOddNum([10, 15, 20, 25]);
console.log("---------");
processOddNum([3, 0, 10, 4, 7, 3]);