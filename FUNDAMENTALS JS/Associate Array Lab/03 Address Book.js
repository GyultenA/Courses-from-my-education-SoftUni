function addressBook(input){
    let book = {};

    for(let element of input){
        let [name, address] = element.split(":");
        book[name] = address;
    }

    let sortArray = Object.entries(book).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
    // (a,b) => a[0].localeCompare(b[0])

    for (let [key, value] of sortArray){
        console.log(`${key} -> ${value}`);
        
    }

    //for(let el of sortArray){
       // console.log(`${el[0]} -> ${el[1]}`)
    //}




}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])