function biggestElement(input){
  let biggestElement;

  for (let i =0; i < input.length; i++){
     for (let j =0; j < input[i].length; j++){
         if(biggestElement){
            if(biggestElement < input[i][j]){
                biggestElement = input[i][j];
            }
         } else {
            biggestElement = input[i][j];
         }
     }
  }
    
    return biggestElement;

}

console.log(biggestElement([[20, 50, 10],[8, 33, 145]]));
console.log(biggestElement([[3, 5, 7, 12],[-1, 4, 33, 2],[8, 3, 0, 4]]));