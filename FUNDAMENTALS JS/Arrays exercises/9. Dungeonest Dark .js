function dungeonestDark(input) {
    let rooms = input.shift().split("|");
    let startingHealth = 100;
    let startingCoins = 0;
    let counterRoom = 0;

    for (let i = 0; i < rooms.length; i++) {
        let currentItem = rooms[i].split(" ");
        let itemMonster = currentItem[0];
        let currentNumber = Number(currentItem[1]);
        counterRoom++;


        if (itemMonster === "potion") {

            if (startingHealth + currentNumber > 100) {
                currentNumber = 100 - startingHealth;
                startingHealth = 100;
            } else {
                startingHealth += currentNumber

            }
            console.log(`You healed for ${currentNumber} hp.`);
            console.log(`Current health: ${startingHealth} hp.`);

        } else if (itemMonster === "chest") {
            startingCoins += currentNumber;
            console.log(`You found ${currentNumber} coins.`);
        } else {
            startingHealth -= currentNumber;

            if (startingHealth > 0) {
                console.log(`You slayed ${itemMonster}.`);
            } else {
                console.log(`You died! Killed by ${itemMonster}.`);
                console.log(`Best room: ${counterRoom}`);
                break;
            }
        }

        if (startingHealth < 0) {
            break;
        }


    }


    if (startingHealth > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${startingCoins}`);
        console.log(`Health: ${startingHealth}`)
    }


}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log("----------");
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);