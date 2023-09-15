function personInfo(firstName, lastName, age){
    let myObject = {
        firstName,
        lastName,
        age
    };
     for (let key of Object.keys(myObject)) {
    console.log (`${key}: ${myObject[key]}`)

}
}

personInfo("Peter", "Pan", "20");