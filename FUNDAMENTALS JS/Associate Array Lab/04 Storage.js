function storage(input) {
    let result = new Map();

    for (let element of input) {
        let tokens = element.split(" ");
        let product = tokens[0];
        let quantity= Number (tokens[1]);

        if (result.has(product)) {
            let currentQuantity = result.get(product);
            let newQuantity = currentQuantity + quantity;
            result.set(product, newQuantity);
        } else {
            result.set(product, quantity)
        }

    }

    for (let [key, quantity] of result) { /// result.entries()
        console.log(`${key} -> ${quantity}`);
    }

}

storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'])