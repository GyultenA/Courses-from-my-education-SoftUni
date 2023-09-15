function employees(input) {
    let obj = {};

    for (let name of input) {
        obj[name] = name.length;

    }

     for (let employeeName in obj){
        console.log(`Name: ${employeeName} -- Personal Number: ${obj[employeeName]}`)

     }


}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);

//for (let name of input){
    //console.log(`Name: ${name} -- Personal Number: ${obj[name.length]}`)
//}