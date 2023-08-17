function barUncome(input) {
    let regex = /%(?<name>[A-Z][a-z]+)%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>[\d]+.?\d*)\$/g;

    let line = input.shift();
    let result = 0

    while (line !== "end of shift") {

        let match = [...line.matchAll(regex)];

        //console.log(match[0].groups);

        for (let element of match) {
            let priceTotal = Number(element.groups.price) * Number(element.groups.quantity);
            result += priceTotal;
            console.log(`${element.groups.name}: ${element.groups.product} - ${priceTotal.toFixed(2)}`);

        }


        line = input.shift();
    }

    console.log(`Total income: ${result.toFixed(2)}`);


}

barUncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])