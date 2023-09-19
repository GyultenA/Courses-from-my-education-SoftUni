function biggerHalf(input) {
    let sortArr = input.sort((a, b) => a - b);
    let middleIndex = Math.floor(sortArr.length / 2);
    let result = sortArr.slice(middleIndex)

    console.log(result);
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);