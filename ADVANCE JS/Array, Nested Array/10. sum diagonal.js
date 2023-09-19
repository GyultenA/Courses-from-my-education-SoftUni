function diagonalSum(matrix) {

    let mainIndex = 0;
    let secondaryIndex = matrix[0].length - 1;
    let mainSum = 0;
    let secondarySum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainSum += matrix[i][mainIndex];
        secondarySum += matrix[i][secondaryIndex];

        mainIndex++;
        secondaryIndex--;
    }

    return mainSum + ' ' + secondarySum;

}
console.log(diagonalSum[[3, 5, 17],[-1, 7, 14],[1, -8, 89]]);
console.log(diagonalSum[[20, 40],[10, 60]]);