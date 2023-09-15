function substring(string, num1, num2){
    let newString = [];

    for (let i = num1; i <= num2; i++){
       let currChar = string[i];
       newString.push(currChar);
       

    }
    console.log(newString.join("")); // judge ne go priema

}

substring('ASentence', 1, 8);