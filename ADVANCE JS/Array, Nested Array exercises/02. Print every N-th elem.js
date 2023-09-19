function printnElement(arr, num){
    let result =[];
    for(let i = 0; i < arr.length; i+=num){
        result.push(arr[i]);
        
    }
    return result;

}

console.log(printnElement(['5', '20', '31', '4', '20'], 2));
console.log(printnElement(['dsa', 'asd', 'test', 'tset'], 2));
console.log(printnElement(['1', '2','3', '4', '5'], 6));