function caloriesObject(input){
    let resultObj = {};

    for(let i =0; i < input.length; i+=2){
        let key = input[i];
        let value = input[i+1];
        resultObj[key]= Number(value);
    }
    console.log(resultObj);
}

caloriesObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
caloriesObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);