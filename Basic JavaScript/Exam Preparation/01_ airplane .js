function airplane (input){
let aircompanyName = input [0];
let adultCount = Number (input[1]);
let kidCount = Number (input[2]);
let netAdultPrice = Number (input[3]);
let serviceFee = Number (input[4]);

let netKidsPrice = netAdultPrice - (netAdultPrice * 0.70);
let serviceFeeAdult = netAdultPrice + serviceFee;
let serviceFeeKids = netKidsPrice + serviceFee;

let totalTicketsPrice =  (serviceFeeAdult * adultCount) + (serviceFeeKids * kidCount);

let profit = totalTicketsPrice * 0.20;

console.log (`The profit of your agency from ${aircompanyName} tickets is ${profit.toFixed(2)} lv.`);



}

airplane (["Ryanair",
"60",
"23",
"158.96",
"39.12"])

