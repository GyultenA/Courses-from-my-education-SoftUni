function lowestPrice(input) {
    let result = new Map();
    for (const line of input) {
        let [townName, productName, productPrice] = line.split(' | ');
        productPrice = Number(productPrice);
        if (!result.has(productName)) {
            result.set(productName, [townName, productPrice]);
        }
        let oldPrice = result.get(productName)[1];
        if (oldPrice > productPrice) {
            result.set(productName, [townName, productPrice])
        }
    }
    for (const key of result) {
        console.log(`${key[0]} -> ${key[1][1]} (${key[1][0]})`);
    }
}
lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])