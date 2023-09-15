function city(input){
    for (let key of Object.keys(input)){
        console.log(`${key} -> ${input[key]}`);
    }

    //function cityInfo(city) {
        //let entries = Object.entries(city);
        //for (let [ key, value ] of entries) {
        //console.log(`${key} -> ${value}`);
       // }
       // }

       //for (let arr of Object.entries(input)){
        //console.log (`${arr[0]} -> ${arr[1]}`);
       //}

}

city({ name: "Sofia", area: 492, population: 1238438, country: "Bulgaria", postCode: "1000" })