function matchFullName(input){
    let regex = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;

    let fullName = [];

    let match = regex.exec(input);

    while(match){
        fullName.push(match)
        match = regex.exec(input);
        
    }

    console.log(fullName.join(" "))

}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan   Ivanov")