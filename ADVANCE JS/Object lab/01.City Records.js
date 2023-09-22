function cityRecords(name, population, treasury){
    let cityList = {
        name,
        population,
        treasury
    }
    return cityList;
}

console.log(cityRecords('Tortuga', 7000, 15000));
console.log(cityRecords('Santo Domingo', 12000, 23500));