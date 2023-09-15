function timePlus15min (input){
let hours = Number (input [0]);
let min = Number (input[1]);
let hoursMin = hours * 60;

let sumMin = min + hoursMin + 15;
let totalHours = Math.floor (sumMin / 60);
let totalMins = sumMin % 60;

if (totalHours == 24){
    totalHours = 0;
}

if (totalMins < 10) {
    console.log (`${totalHours}:0${totalMins}`);
} else {
    console.log(`${totalHours}:${totalMins}`);
}


}

timePlus15min (["23", "59"]);