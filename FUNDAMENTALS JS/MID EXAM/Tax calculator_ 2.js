function taxCalculator(input) {
    let myArray = input.shift().split(">>");
    let totalTaxCollect = 0;

    for (let i = 0; i < myArray.length; i++) {
        let currentComand = myArray[i].split(" ");
        let carType = currentComand[0];
        let years = Number(currentComand[1]);
        let kilometers = Number(currentComand[2]);

        switch (carType) {
            case "family":
                let taxForYear = 50;

                let carTaxesForKm = Math.floor((kilometers / 3000)) *12
                let carTaxesForUsed = taxForYear - (years * 5);
                let totalTaxFamily = carTaxesForKm + carTaxesForUsed;
                console.log(`A ${carType} car will pay ${totalTaxFamily.toFixed(2)} euros in taxes.`);

                totalTaxCollect += totalTaxFamily;
                break;


            case "heavyDuty":
                let taxForYearVan = 80;

                let heavyTaxes = Math.floor(kilometers / 9000) * 14;
                let heavyTaxesUsed = taxForYearVan - (years * 8);
                let totalTaxHeavyDuty = heavyTaxes + heavyTaxesUsed;
                console.log(`A ${carType} car will pay ${totalTaxHeavyDuty.toFixed(2)} euros in taxes.`);

                totalTaxCollect += totalTaxHeavyDuty;
                break;

            case "sports":
                let taxForYearSports = 100;

                let sportTaxesKm = Math.floor(kilometers / 2000) * 18;
                let sportTaxesUsed = taxForYearSports - (years * 9);
                let totalTaxSports = sportTaxesKm + sportTaxesUsed;
                console.log(`A ${carType} car will pay ${totalTaxSports.toFixed(2)} euros in taxes.`);

                totalTaxCollect += totalTaxSports;
                break;

            default: console.log("Invalid car type."); break;
        }
    }
    console.log(`The National Revenue Agency will collect ${totalTaxCollect.toFixed(2)} euros in taxes.`)
}

taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);
console.log('-------------');

