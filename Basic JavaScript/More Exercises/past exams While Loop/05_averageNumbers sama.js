function averageNumbers (input){
 let index = 0;
 let num = Number (input [index++]);
 let sum = 0;

 for( let i = 1; i <= num; i++){
    let currentNum = Number (input [index++])
    sum += currentNum
 }

 let avrgSum = sum / num;
 console.log (avrgSum.toFixed(2));

}

averageNumbers (["2", "6", "4"]);