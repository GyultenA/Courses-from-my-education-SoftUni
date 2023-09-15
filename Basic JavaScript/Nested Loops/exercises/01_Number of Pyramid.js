function pyramid (input){
let n = Number (input[0]);
let current = 1;
let isBigger = false;
let printCurrent = "";

for (let rows = 1; rows <= n; rows++){
    
    for (let cols = 1; cols <= rows; cols++){
       
        if (current > n){
            isBigger = true;
            break;
        }
        printCurrent += current + " ";
        current++;
    }

    console.log (printCurrent);
    printCurrent = "";

    if (isBigger){
        break;
    }

}

}

pyramid (["7"]);