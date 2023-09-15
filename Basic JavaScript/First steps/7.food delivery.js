function foodDelivery (input) {
    let chikenMenuCount = Number (input[0]);
    let fishMenuCount = Number (input[1]);
    let veganMenuCount = Number (input[2]);

    let chikenMenuPrice = chikenMenuCount * 10.35;
    let fishMenuPrice = fishMenuCount * 12.40;
    let vegMenuPrice = veganMenuCount * 8.15;

    let totalMenuPrice = chikenMenuPrice + fishMenuPrice + vegMenuPrice;
    let dessertPrice = (20/100) * totalMenuPrice

    let priceWithDessert = totalMenuPrice + dessertPrice;
    let priceWithDelivery = priceWithDessert + 2.50;

    console.log (priceWithDelivery);


}

foodDelivery (["2", "4", "3"]);
