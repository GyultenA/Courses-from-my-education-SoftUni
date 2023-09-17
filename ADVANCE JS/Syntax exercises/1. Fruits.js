function fruits(fruit, grams, price){
    let weight = grams /1000;
    let amount = weight* price;
    
    console.log(`I need $${amount.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}
fruits('orange', 2500, 1.80);
fruits('apple', 1563, 2.35);