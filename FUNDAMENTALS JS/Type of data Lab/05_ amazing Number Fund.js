function  amzingNumber (num){
    let numString = num.toString();
    let sum = 0;

    for (let i =0; i < numString.length; i++){
        sum += Number (numString[i]);
    }

    let result = sum.toString().includes("9");

    console.log (result ? `${numString} Amazing? True` : `${numString} Amazing? False`);

}

amzingNumber (1233);