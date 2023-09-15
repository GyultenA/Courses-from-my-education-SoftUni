function tradeCommissions (input){
    let city = input [0];
    let sales = Number (input[1]);
    let commissionsSum = 0

    switch (city){
        case "Sofia":
            if (0 <= sales && sales <= 500){
                commissionsSum = sales * 0.05
                console.log (commissionsSum.toFixed(2))
            } else if ( 500 <= sales && sales <= 1000){
                commissionsSum = sales *0.07
                console.log (commissionsSum.toFixed(2))
            } else if ( 1000 <= sales && sales <= 10000){
                commissionsSum = sales *0.08
                console.log (commissionsSum.toFixed(2))
            } else if (sales > 10000){
                commissionsSum = sales * 0.12
                console.log (commissionsSum.toFixed(2))
            } else if ( sales < 0){
                console.log ("error")
            }

        break;

        case "Varna":
            if (0 <= sales && sales <= 500){
                commissionsSum = sales * 0.045
                console.log (commissionsSum.toFixed(2))
            } else if ( 500 <= sales && sales <= 1000){
                commissionsSum = sales *0.075
                console.log (commissionsSum.toFixed(2))
            } else if ( 1000 <= sales && sales <= 10000){
                commissionsSum = sales *0.10
                console.log (commissionsSum.toFixed(2))
            } else if (sales > 10000){
                commissionsSum = sales * 0.13
                console.log (commissionsSum.toFixed(2))
            }else if ( sales < 0){
                console.log ("error")
            }
        break;


        case "Plovdiv":
            if (0 <= sales && sales <= 500){
                commissionsSum = sales * 0.055
                console.log (commissionsSum.toFixed(2))
            } else if ( 500 <= sales && sales <= 1000){
                commissionsSum = sales *0.08
                console.log (commissionsSum.toFixed(2))
            } else if ( 1000 <= sales && sales <= 10000){
                commissionsSum = sales *0.12
                console.log (commissionsSum.toFixed(2))
            } else if (sales > 10000){
                commissionsSum = sales * 0.145
                console.log (commissionsSum.toFixed(2))
            } else if ( sales < 0){
                console.log ("error")
            }
        break;
        default: console.log("error"); break;
       
    }
 
}

tradeCommissions (["Plovdiv",
"-20"])



