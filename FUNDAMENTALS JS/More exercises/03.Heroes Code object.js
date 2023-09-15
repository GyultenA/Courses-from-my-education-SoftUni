function heroesCode(input) {
    let heroCount = Number(input[0]);
    let objHeroes = {};

    for (let i = 1; i <= heroCount; i++) {
        let line = input[i];
        let [heroName, hPoints, mPoints] = line.split(" ");
        hPoints = Number(hPoints);
        mPoints = Number(mPoints);

        objHeroes[heroName] = {
            hPoints: hPoints,
            mPoints: mPoints,
        }
    }

    let index = heroCount + 1;
    let command = input[index];
    index++;
    while (command !== "End") {
        let tokens = command.split(" - ");
        let action = tokens[0];
        let heroName = tokens[1];

        switch (action) {
            case "CastSpell":
                let mPointsNeeded = Number(tokens[2]);
                let spellName = tokens[3];

                if (objHeroes[heroName].mPoints >= mPointsNeeded) {
                    objHeroes[heroName].mPoints -= mPointsNeeded;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${objHeroes[heroName].mPoints} MP!`)
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;

            case "TakeDamage":
                let damage = Number(tokens[2]);
                let attacker = tokens[3];
                objHeroes[heroName].hPoints -= damage;
                if (objHeroes[heroName].hPoints > 0) {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${objHeroes[heroName].hPoints} HP left!`);
                } else {
                    delete objHeroes[heroName];
                    console.log(`${heroName} has been killed by ${attacker}!`)
                }
                break;

            case "Recharge":
                let amount = Number(tokens[2]);

                let recovered = Math.min((200 - objHeroes[heroName].mPoints), amount)
                objHeroes[heroName].mPoints += recovered;
                    console.log(`${heroName} recharged for ${recovered} MP!`);
                
                break;

            case "Heal":
                let amountHp = Number(tokens[2]);
                let recoveredHp =Math.min((100 - objHeroes[heroName].hPoints), amountHp)
                objHeroes[heroName].hPoints += recoveredHp;
                    console.log(`${heroName} healed for ${recoveredHp} HP!`);
               
                break;
        }

        command = input[index];
        index++;
    }

     for(let hero in objHeroes){
        console.log(`${hero}\n  HP: ${objHeroes[hero].hPoints}\n  MP: ${objHeroes[hero].mPoints}`);
     }
}

heroesCode([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"]);
console.log("-------------------------")
heroesCode([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"])