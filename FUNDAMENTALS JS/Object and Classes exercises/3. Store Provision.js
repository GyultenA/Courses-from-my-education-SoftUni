function storeProduct(currStock, order) {

    let store = {};

    for (let i = 0; i < currStock.length; i += 2) {

        let product = currStock[i];
        let quantity = Number(currStock[i + 1]);

        store[product] = quantity;

    }

    for (let i = 0; i < order.length; i += 2) {
        let product = order[i];

        if (!store.hasOwnProperty(product)) {
            store[product] = 0;
        }

        let orderQuantity = Number(order[i + 1])
        store[product] += orderQuantity;


    }

    for (let productkey in store) {
        console.log(`${productkey} -> ${store[productkey]}`)
    }

}


storeProduct(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])
