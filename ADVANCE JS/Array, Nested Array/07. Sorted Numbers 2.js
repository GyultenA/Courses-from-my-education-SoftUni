function sortingNumbers(input) {
    const sortedAscendingArr = input.sort((a, b) => a - b);
    const result = [];
    let inputLength = Math.ceil(sortedAscendingArr.length / 2)

    for (let i = 0; i < inputLength; i++) {
        let smallest = sortedAscendingArr[i];
        let biggest = sortedAscendingArr[(sortedAscendingArr.length - 1) - i];

        let middleSorted = Math.floor(sortedAscendingArr.length / 2);
        let sortedLength = sortedAscendingArr.length;

        if (i === middleSorted && sortedLength % 2 === 1) {
            result.push(smallest);
            break;
        }
        result.push(smallest, biggest);
    }

    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log('+++++++++++++++++++');
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18,]));
console.log('+++++++++++++++++++');
console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));