function convertObject(inputJson){
    let obj = JSON.parse(inputJson);

    for (let [key, value] of Object.entries(obj)){
        console.log(`${key}: ${value}`);
    }


}

convertObject('{"name": "George", "age": 40, "town": "Sofia"}')