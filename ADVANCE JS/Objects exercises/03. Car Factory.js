function carFactory(object) {
    let resultObj = {
        model: object.model,

    }

    let power = object.power
    if (power <= 90) {
        resultObj.engine = {
            power: 90,
            volume: 1800
        }
    } else if (power <= 120) {
        resultObj.engine = {
            power: 120,
            volume: 2400
        }
    } else {
        resultObj.engine = {
            power: 200,
            volume: 3500
        }
    }
    //console.table(resultObj)
    let carriage = object.carriage;

    if (carriage === "hatchback") {
        resultObj.carriage = {
            type: "hatchback",
            color: object.color
        }
    } else {
        resultObj.carriage = {
            type: "coupe",
            color: object.color
        }
    }

    let wheelsize = object.wheelsize;
    if (wheelsize % 2 === 0) {
        wheelsize -= 1;
    }

    resultObj.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
    //console.table(resultObj)
    //resultObj.wheel = new Array[]
    return resultObj;

    //console.table(resultObj);

}

//console.log(carFactory({
   // model: 'VW Golf II',
   // power: 90,
    //color: 'blue',
    //carriage: 'hatchback',
    //wheelsize: 14
//}));
//console.log(carFactory({
    //model: 'Opel Vectra',
    //power: 110,
    //color: 'grey',
    //carriage: 'coupe',
    //wheelsize: 17
//}));

carFactory({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
})