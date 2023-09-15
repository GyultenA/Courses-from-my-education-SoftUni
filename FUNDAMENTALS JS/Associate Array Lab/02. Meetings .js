function meeting(input){
    let result = {};

    for (let element of input){
        let [day, name] = element.split(" ");

        if (result.hasOwnProperty(day)){
            console.log (`Conflict on ${day}!`);
        } else {
            result[day] = name;
            console.log(`Scheduled for ${day}`)

        }
       

    }

     for (let [key,value] of Object.entries(result)){
        console.log (`${key} -> ${value}`);
     }
     
     //the same
    // for(let key in result){
       // console.log(`${key} -> ${result[key]}`)
    // }


}

meeting(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])