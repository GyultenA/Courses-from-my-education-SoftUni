function computerStore(input) {
    let customerType = input[input.length - 1];

    let lastPartIndex = input.length - 2;

    let allPartsPrice = 0;

    for (let i = 0; i <= lastPartIndex; i++) {
        let currentPartPrice = Number(input[i]);

        if (currentPartPrice < 0) {
            console.log("Invalid price!")
        } else {
            allPartsPrice += currentPartPrice;
        }

    }

    let priceAfterTaxes = allPartsPrice * 1.20;
    let taxes = priceAfterTaxes - allPartsPrice;

    if (customerType === "special") {
        priceAfterTaxes *= 0.90;
    }

    if (priceAfterTaxes === 0) {
        console.log("Invalid order!")
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${allPartsPrice.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log (`Total price: ${priceAfterTaxes.toFixed(2)}$`)
    }

}

computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])
