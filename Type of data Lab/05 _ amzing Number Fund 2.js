function amazingNumber (num){
    let sum = 0;
    let numText = num.toString();

    for(let i = 0; i < numText.length; i++){
        sum += Number(numText[i])
    }

    let sumString = sum.toString();
    let isAmazing = false;

    for (let i = 0; i <sumString.length; i++){
     if (Number(sumString[i] )=== 9){
        isAmazing = "True";
        break;
     }
    }

    

console.log (`${num} Amazing? ${isAmazing}`)


}

amazingNumber(999);