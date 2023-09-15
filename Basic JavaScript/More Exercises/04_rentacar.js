function rentacar (input){
 let budget = Number (input[0]);
 let season = input [1];

 let moneyCost = 0;

 if (budget <= 100 && season === "Summer"){
    moneyCost = budget * 0.35;
    console.log ("Economy class");
    console.log (`Cabrio - ${moneyCost.toFixed(2)}`);
 }else if (budget <= 100 && season === "Winter"){
    moneyCost = budget * 0.65;
    console.log ("Economy class");
    console.log (`Jeep - ${moneyCost.toFixed(2)}`);
 }

   
 if (budget >100 && budget <= 500 && season === "Summer"){
    moneyCost = budget * 0.45;
    console.log ("Compact class");
    console.log (`Cabrio - ${moneyCost.toFixed(2)}`);
 }else if (budget >100 && budget <= 500 && season === "Winter"){
    moneyCost = budget * 0.80;
    console.log ("Compact class");
    console.log (`Jeep - ${moneyCost.toFixed(2)}`);
 }


 if (budget > 500 && season === "Summer"){
    moneyCost = budget * 0.90;
    console.log ("Luxury class");
    console.log (`Jeep - ${moneyCost.toFixed(2)}`);
 }else if (budget > 500 && season === "Winter"){
    moneyCost = budget * 0.90;
    console.log ("Luxury class");
    console.log (`Jeep - ${moneyCost.toFixed(2)}`);
 }

}

rentacar (["1010", "Summer"]);