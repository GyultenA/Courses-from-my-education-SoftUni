function convert(name, lastName, hairColor){

    let myObj = {
        name,
        lastName,
        hairColor,
    };

    console.log(JSON.stringify(myObj))

}

convert('George', 'Jones', 'Brown')