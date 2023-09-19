function extractIncreasing(input){
    let result = [];
    let currElement = input[0];

    for (let i = 0; i < input.length; i++){
        if(currElement <= input[i]){
          currElement = input[i];
          result.push(currElement);
        }
       
    }
   return result
}

console.log(extractIncreasing([1, 3, 8, 4,10, 12, 3, 2, 24]));
console.log("--------------");
console.log(extractIncreasing([1, 2, 3,4]));