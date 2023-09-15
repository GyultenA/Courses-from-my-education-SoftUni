function shopFruits(input) {
    let fruit = input [0];
    let dayOfWeek = input [1];
    let quantity = Number (input[2]);

    let priceFruit = 0

    if (dayOfWeek === "Monday" || dayOfWeek=== "Tuesday"|| dayOfWeek===  "Wednesday" || dayOfWeek===  "Thursday" || dayOfWeek==="Friday" ) {
        if (fruit === "banana"){
            priceFruit = priceFruit + (2.50 * quantity);
            console.log (priceFruit.toFixed(2));
        } else if (fruit === "apple"){
            priceFruit = priceFruit + (1.20 * quantity);
            console.log (priceFruit.toFixed(2));
        } else if (fruit === "orange"){
            priceFruit = priceFruit + (0.85 * quantity);
            console.log (priceFruit.toFixed(2));
        } else if (fruit === "grapefruit"){
            priceFruit = priceFruit + (1.45 * quantity);
            console.log (priceFruit.toFixed(2));
        } else if (fruit === "kiwi"){
            priceFruit = priceFruit + (2.70 * quantity);
            console.log (priceFruit.toFixed(2));
        } else if (fruit === "pineapple"){
            priceFruit = priceFruit + (5.50 * quantity);
            console.log (priceFruit.toFixed(2));
        } else if (fruit === "grapes"){
            priceFruit = priceFruit + (3.85 * quantity);
            console.log (priceFruit.toFixed(2));
        } else {
            console.log ("error");
        }
    } else if (dayOfWeek === "Saturday" || dayOfWeek=== "Sunday"){
        if (fruit === "banana"){
            priceFruit = priceFruit + (2.70 * quantity);
            console.log (priceFruit.toFixed(2));
        } else if (fruit === "apple"){
            priceFruit = priceFruit + (1.25 * quantity);
            console.log (priceFruit.toFixed(2));
        } else if (fruit === "orange"){
            priceFruit = priceFruit + (0.90 * quantity);
            console.log (priceFruit.toFixed(2));
        } else if (fruit === "grapefruit"){
            priceFruit = priceFruit + (1.60 * quantity);
            console.log (priceFruit.toFixed(2));
        } else if (fruit === "kiwi"){
            priceFruit = priceFruit + (3 * quantity);
            console.log (priceFruit.toFixed(2));
        } else if (fruit === "pineapple"){
            priceFruit = priceFruit + (5.60 * quantity);
            console.log (priceFruit.toFixed(2));
        } else if (fruit === "grapes"){
            priceFruit = priceFruit + (4.20 * quantity);
            console.log (priceFruit.toFixed(2));
        } else {
            console.log ("error");
        } 

        
    }else {
        console.log ("error");
    }
    }





shopFruits 
(["apple",
"workday",
"2"])



