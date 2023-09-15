function reportSystem (input){

let budget = Number (input[0]);

let command = input[index];
index++;


let countCash = 0;
let countCard = 0;
let sumCash = 0;
let sumCard = 0;


while (command !== "End"){
    
    if (command === "End"){
        console.log ("Failed to collect required money for charity.");
        break;
    }
 let productPrice = Number (input[index]);

if (command % 2 === 0) {
    if (productPrice >= 100 ){
        console.log ( "Error in transaction!");
    } else {
        console.log ("Product sold!");
        sumCash += Number (productPrice);
        countCash++
    }
    
} else {
    if (productPrice < 10) {
        console.log ( "Error in transaction!");
    } else {
        console.log ("Product sold!");
        sumCard += Number (productPrice);
        countCard++
    
}
command = input [index]
index++
}

let totalSum = sumCard + sumCash;
let averageCard = sumCard / 2;
let averageCash = sumCash / 2;

if (totalSum >= budget ){
    console.log (`Average CS: ${averageCash.toFixed(2)}`);
    console.log (`Average CC: ${averageCard.toFixed(2)}`);
}


}
}


reportSystem (["500", "120", "8","63","256","78","317"]);