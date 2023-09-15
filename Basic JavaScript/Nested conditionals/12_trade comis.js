function tradeCommissions (input){
    let city = input [0];
    let sales = Number (input[1]);
    let commissionsSum = 0

    switch (city){
        case "Sofia":
            if (0 <= sales && sales <= 500){
                commissionsSum = sales * 0.05
            } else if ( 500 <= sales && sales <= 1000){
                commissionsSum = sales *0.07
            } else if ( 1000 <= sales && sales <= 10000){
                commissionsSum = sales *0.08
            } else if (sales > 10000){
                commissionsSum = sales * 0.12
            } else if ( sales < 0){
                console.log ("error")
            }

        break;

        case "Varna":
            if (0 <= sales && sales <= 500){
                commissionsSum = sales * 0.045
            } else if ( 500 <= sales && sales <= 1000){
                commissionsSum = sales *0.075
            } else if ( 1000 <= sales && sales <= 10000){
                commissionsSum = sales *0.10
            } else if (sales > 10000){
                commissionsSum = sales * 0.13
            } else if ( sales < 0){
                console.log ("error")
            }
        break;


        case "Plovdiv":
            if (0 <= sales && sales <= 500){
                commissionsSum = sales * 0.055
            } else if ( 500 <= sales && sales <= 1000){
                commissionsSum = sales *0.08
            } else if ( 1000 <= sales && sales <= 10000){
                commissionsSum = sales *0.12
            } else if (sales > 10000){
                commissionsSum = sales * 0.145
            } else if ( sales < 0){
                console.log ("error")
            }
        break;
        default: console.log ("error"); break;
    }


  console.log (commissionsSum.toFixed(2))

}

tradeCommissions (["Kaspichan","-50"]);


