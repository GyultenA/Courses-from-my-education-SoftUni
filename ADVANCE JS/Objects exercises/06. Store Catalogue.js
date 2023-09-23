function storeCatalogue(arr) {
    let result = {};

    for (let line of arr) {
        let [product, price] = line.split(" : ");
        price = Number(price);

        let firstLetter = product[0];

        if (firstLetter in result) {
            result[firstLetter].push({ product, price });
        } else {
            result[firstLetter] = [];
            result[firstLetter].push({ product, price });
        }
    }
    const sortObj = {};
    Object.keys(result)
        .sort((a, b) => a.localeCompare(b))
        .forEach(function (key) {
            sortObj[key] = result[key];
        })

    for (let key in sortObj) {
        console.log(key);


        for (let item in sortObj[key].sort((a, b) => (a.product > b.product) ? 1 : -1)) {
            let element = sortObj[key][item];
            console.log(` ${element.product}: ${element.price}`)
        }
    }
}

storeCatalogue(['Appricot : 20.4', 'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
console.log("------------------");
storeCatalogue(['Banana : 2', 'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001', 'Barrel : 10'])