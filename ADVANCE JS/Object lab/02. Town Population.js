function townPopulation(arr){
    let result = {};

    for (let line of arr){
        let [town, population]  = line.split(" <-> ");
        population = Number(population);
       
        if(!result.hasOwnProperty(town)){
            result[town] = population;
        } else {
            result[town] += population
        }

    }
    for (let name in result){
        console.log(`${name} : ${result[name]}`)
    }

}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);
console.log("---------------")

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);