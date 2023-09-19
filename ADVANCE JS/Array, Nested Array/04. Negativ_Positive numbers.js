function negativeOrPositive(input){
    let result = [];

    for (let i = 0; i < input.length; i++){
         if (input[i] < 0){
            result.unshift(input[i]);
         } else {
            result.push(input[i]);
         }
    }
  console.log(result.join("\n"));
}

negativeOrPositive([7, -2, 8, 9])
console.log("------------")
negativeOrPositive([3, -2, 0, -1]);