function heroesCode(input) {
    let countHeroes = Number(input[0]);
    let mapHeroes = new Map();

    for (let i = 1; i <= countHeroes; i++) {
        let current = input[i]
        let [heroName, hitPoints, mamaPoints] = current.split(" ");
        hitPoints = Number(hitPoints);
        mamaPoints = Number(mamaPoints);

        mapHeroes.set(heroName, []);
        mapHeroes.get(heroName).push(hitPoints);
        mapHeroes.get(heroName).push(mamaPoints);
    }
    let index = countHeroes + 1;
    for (let i = index; i < input.length; i++) {
        let line = input[i].split(" - ");
        let command = line[0];
        let currHero = line[1];

        if (command === "End") {
            break;
        }

        switch (command) {
            case "Heal":
                let currHP = Number(line[2]);
                let need = 100 - mapHeroes.get(currHero)[0];
                mapHeroes.get(currHero)[0] += currHP;
                if (mapHeroes.get(currHero)[0] > 100) {
                    mapHeroes.get(currHero)[0] = 100;
                    console.log(`${currHero} healed for ${need} HP!`)
                } else {
                    console.log(`${currHero} healed for ${currHP} HP!`);
                }
                break;

            case "CastSpell":
                let needMp = Number(line[2]);
                let spellName = line[3];
                if (mapHeroes.get(currHero)[1] > needMp) {
                    mapHeroes.get(currHero)[1] -= needMp;
                    console.log(`${currHero} has successfully cast ${spellName} and now has ${mapHeroes.get(currHero)[1]} MP!`)
                } else {
                    console.log(`${currHero} does not have enough MP to cast ${spellName}!`);
                }
                break;

            case "TakeDamage":
                let damage = Number(line[2]);
                let attacker = line[3];
                mapHeroes.get(currHero)[0] -= damage;
                if (mapHeroes.get(currHero)[0] >= 0) {
                    console.log(`${currHero} was hit for ${damage} HP by ${attacker} and now has ${mapHeroes.get(currHero)[0]} HP left!`)
                } else {
                    mapHeroes.delete(currHero);
                    console.log(`${currHero} has been killed by ${attacker}!`);
                }
                break;
            case "Recharge":
                let amount = Number(line[2]);
                let over = 200 - mapHeroes.get(currHero)[1];
                mapHeroes.get(currHero)[1] += amount;
                if (mapHeroes.get(currHero)[1] > 200) {
                    mapHeroes.get(currHero)[1] = 200;
                    console.log(`${currHero} recharged for ${over} MP!`);
                } else {
                    console.log(`${currHero} recharged for ${amount} MP!`);
                }
                break;
        }

    }

    for (let [hero, info] of mapHeroes) {
        console.log(`${hero}\n  HP: ${info[0]}\n  MP: ${info[1]}`)
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
    "End"
]);
console.log("----------------")

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
    "End"
])