function juiceFlavors(input) {
    const juices = new Map();
    const bottles = new Map();

    for (let line of input){
        let [currentJuice, currentQuantity] = line.split(" => ")
        currentQuantity = Number(currentQuantity);
        //console.log(currentJuice, currentQuantity)

        if(!juices.has(currentJuice)){
            juices.set(currentJuice, 0);
        }

        let newQuantity = juices.get(currentJuice) + currentQuantity;
        juices.set(currentJuice, newQuantity);
        //console.log(juices)
       if (newQuantity >= 1000){
          if(!bottles.has(currentJuice)){
            bottles.set(currentJuice, 0);
          }
          let countBottles = Math.floor(newQuantity /1000); 
          //console.log(countBottles)
          let addBottle = bottles.get(currentJuice) + countBottles;
          bottles.set(currentJuice, addBottle);
          juices.set(currentJuice, currentQuantity % 1000);
       }

    }
    let result = [];
    bottles.forEach((key, value) => result.push(`${value} => ${key}`));
    console.log(result.join("\n"));
}

//Orange => 2 Peach => 2
//Pear => 8 Watermelon => 10 Kiwi => 4

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])
console.log("---------------")

juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])