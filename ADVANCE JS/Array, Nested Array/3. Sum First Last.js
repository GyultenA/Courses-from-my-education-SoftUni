function sumFirstLast (input){
    let firstElement = Number(input.shift());
    let lastElement = Number(input[input.length - 1]);
    let sum = firstElement + lastElement;
    return sum;
}

console.log(sumFirstLast(['20', '30', '40']))
console.log(sumFirstLast(['5', '10']))