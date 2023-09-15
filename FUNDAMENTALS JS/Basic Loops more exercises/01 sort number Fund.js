function sortNumber (num1, num2, num3){
  
    let arrayNumbers = [];
    arrayNumbers.push(num1, num2, num3);
    let sorted = arrayNumbers.sort((a, b) => b - a);
    console.log(sorted.join('\n'));
}

  


    

sortNumber (2,1,3);