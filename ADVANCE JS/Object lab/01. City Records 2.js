function cityRecords(name, population, treasury){
    let cityList = {}
        cityList.name = name,
        cityList.population = population,
        cityList.treasury = treasury
    
    return cityList;
}

console.log(cityRecords('Tortuga', 7000, 15000));
console.log(cityRecords('Santo Domingo', 12000, 23500));