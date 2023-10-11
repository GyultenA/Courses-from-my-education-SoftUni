function juiceFlavors(input) {
    const juices = {};
    const bottles = {};

    for (let line of input) {
        let [juice, quantity] = line.split(" => ");

        let currentJuice = {};
        quantity = Number(quantity);

        if (!currentJuice.hasOwnProperty(juice)) {
            currentJuice = {
                juice,
                quantity
            }
            juices[juice] = currentJuice;
        } else {
            currentJuice = juices[juice]
            currentJuice.quantity += quantity;
        }
        let currentBottles = 0;

        while (currentJuice.quantity >= 1000) {
            currentBottles++;
            currentJuice.quantity -= 1000;
        }
        if (!Object.values(bottles).map(x => x.juice).includes(juice) && currentBottles !== 0) {
            currentJuice = {
                juice,
                bottles: currentBottles
            }
            bottles[juice] = currentJuice;
        } else if (Object.values(bottles).map(x => x.juice).includes(juice)) {
            currentJuice = bottles[juice];
            currentJuice.bottles += currentBottles;
        }
    }
    for (let juice of Object.entries(bottles)) {
        console.log(`${juice[0]} => ${juice[1].bottles}`)
    }


}

//Orange => 2 Peach => 2
//Pear => 8 Watermelon => 10 Kiwi => 4

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])
console.log("---------------")
juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])