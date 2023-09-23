function carFactory(object) {
    let model = object.model;
    let power = object.power;
    let color = object.color;
    let carriage = object.carriage;
    let wheelsize = object.wheelsize;

    let resultObj = {};

    let engineEnum = {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 }
    }

    resultObj.model = model;

    let carriageEnum = {
        "hatchback": { type: 'hatchback', color  },
        "coupe": { type: 'coupe', color }
    }

    if (power <= 90) {
        resultObj.engine = engineEnum["Small engine"];
    } else if (power <= 120) {
        resultObj.engine = engineEnum["Normal engine"];
    } else {
        resultObj.engine = engineEnum["Monster engine"];
    }

    resultObj.carriage = carriageEnum[carriage];

    if (wheelsize % 2 === 0) {
        wheelsize -= 1;
    }

    //resultObj.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
    resultObj.wheels = new Array(4).fill(wheelsize);
    console.table(resultObj)
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

