function aggregateElement(input) {
    //let arrLength = input.length;
    let result = 0;

    for (let el of input) {
        result += el
    }
    console.log(result);

    let sumInverse = input.map(x => 1 / x).reduce((a, c) => a + c, 0);
    console.log(sumInverse);
    console.log(input.join(""));

}

aggregateElement([1, 2, 3]);
console.log("-----------------------")
aggregateElement([2, 4, 8, 16]);