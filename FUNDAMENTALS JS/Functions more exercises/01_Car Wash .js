function carWash(array) {
    let sumPercent = 0;

    for (let i = 0; i < array.length; i++) {

        let currcommand = array[i]

        switch (currcommand) {
            case "soap": sumPercent += 10; break;
            case "water": sumPercent *= 1.20; break;
            case "vacuum cleaner": sumPercent *= 1.25; break;
            case "mud": sumPercent *= 0.9; break;
        }

    }

    console.log(`The car is ${sumPercent.toFixed(2)}% clean.`);

}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])