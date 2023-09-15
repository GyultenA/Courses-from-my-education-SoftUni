function sumFirstLast (arr){
    let firstNumber = Number(arr[0]);
    let lastNumber = Number(arr[arr.length-1]);
    
    let sum = firstNumber + lastNumber;
    console.log(sum);

}

sumFirstLast (['20', '30', '40']);
console.log("---------")
sumFirstLast(['5', '10']);