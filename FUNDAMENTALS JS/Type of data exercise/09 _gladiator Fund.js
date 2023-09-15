function gladiator(fightCountLost, helemtPrice, swordPrice, shieldPrice, armorPrice) {
    let totalPrice = 0;

    for (let fight = 1; fight <= fightCountLost; fight++) {

        if (fight % 2 === 0) {
            totalPrice += helemtPrice;
        }

        if (fight % 3 === 0) {
            totalPrice += swordPrice;
        }

        if (fight % 6 === 0) {
            totalPrice += shieldPrice;
        }

        if (fight % 12 === 0) {
            totalPrice += armorPrice;
        }
    }

    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`)

}
gladiator(7, 2, 3, 4, 5)