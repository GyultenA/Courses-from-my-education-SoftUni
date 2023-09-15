function matchTickets (input){
let budget = Number (input[0]);
let category = input[1];
let people = Number (input[2]);

let transportCost = 0;

if (people >= 1 && people <= 4){
    transportCost = budget * 0.75;
} else if ( people <= 9){
    transportCost = budget * 0.60;
} else if ( people <= 24){
    transportCost = budget * 0.50;
} else if (people <= 49){
    transportCost = budget * 0.40;
} else {
    transportCost = budget * 0.25;
}
  
let ticketPrice = 0;

if (category === "VIP"){
    ticketPrice = people * 499.99;
} else {
    ticketPrice = people * 249.99;
}

let totalPrice = transportCost + ticketPrice;
let moneyLeft = budget - totalPrice;
let moneyNeeded = totalPrice - budget;

if (totalPrice <= budget){
    console.log (`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
} else {
    console.log (`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
}



}

matchTickets (["30000","VIP","49"])