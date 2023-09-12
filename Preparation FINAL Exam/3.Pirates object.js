function pirates(input) {
    let target = {};

    for (let line of input) {
        if (line === "Sail") {
            break;
        }
        let [city, population, gold] = line.split("||");
        population = Number(population);
        gold = Number(gold)

        if (!target.hasOwnProperty(city)) {
            target[city] = {
                population: population,
                gold: gold
            };
        } else {
            target[city].population += population;
            target[city].gold += gold;
        }
    }
    let index = input.indexOf("Sail") + 1;
    let command = input[index];
    index++;

    while (command !== "End") {
        let tokens = command.split("=>");
        let action = tokens[0];
        let city = tokens[1];
        let population =0;
        let gold = 0;

        switch (action) {
            case "Plunder":
                if(!target.hasOwnProperty(city)){
                    break;
                }
                population = Number(tokens[2]);
                gold = Number(tokens[3]);
                if (target.hasOwnProperty(city)) {
                    target[city].population -= population;
                    target[city].gold -= gold;
                    console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);
                }
                if (target[city].population <= 0 || target[city].gold <= 0) {
                    delete target[city];
                    console.log(`${city} has been wiped off the map!`);
                }
                break;

            case "Prosper":
                if(!target.hasOwnProperty(city)){
                    break;
                }
                gold = Number(tokens[2]);
                if(!target.hasOwnProperty(city));
                break;

                if (gold < 0) {
                    console.log("Gold added cannot be a negative number!");
                    break;
                } else {
                    target[city].gold += gold;
                    console.log(`${gold} gold added to the city treasury. ${city} now has ${target[city].gold} gold."`)
                }

        }


        command = input[index];
        index++;
    }

    let result = Object.entries(target);

    if (result.length > 0) {
        console.log(`Ahoy, Captain! There are ${result.length} wealthy settlements to go to:`);
        for (let element of result) {
            console.log(`${element[0]} -> Population: ${element[1].population} citizens, Gold: ${element[1].gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }

}
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);

console.log("---------------------------");
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])