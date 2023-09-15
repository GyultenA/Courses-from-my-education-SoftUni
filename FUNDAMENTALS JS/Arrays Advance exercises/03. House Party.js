function houseParty(input){
    let list = [];

    for( let person of input){
      let details = person.split(' ');
      let namePerson = details[0];

      if (details.includes('not')){
          
        if(list.includes(namePerson)){
            let nameIndex = list.indexOf(namePerson);

            if (nameIndex !== -1){
                list.splice(nameIndex);
            }
        } else {
            console.log(`${namePerson} is not in the list!`);
        }

      } else {
           
            if (list.includes(namePerson)){
                console.log(`${namePerson} is already in the list!`);
            } else {
                list.push(namePerson);
            }
      }
       

    }
    list.forEach(person => console.log(person));

}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])