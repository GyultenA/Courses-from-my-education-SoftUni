function magicMatrices(input){
    let isMagic = true;

    if (input.length === 0 || input.length !== input[0].length) {
        return false;
    }

    let sum = input[0].reduce((a, v) => a + v);

    for (let i = 0; i < input.length; i++) {
        let localRowSum = 0;
        let localColSum = 0;
        for (let j = 0; j < input[i].length; j++) {
            localRowSum += input[i][j];
            localColSum += input[j][i];
        }

        if (sum !== localRowSum || sum !== localColSum) {
            isMagic = false;
            break;
        }
    }
    return isMagic;
}

console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
console.log(magicMatrices([
    [11, 32, 45],
    [21, 0, 1]
]));
console.log(magicMatrices([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 1]
]));

