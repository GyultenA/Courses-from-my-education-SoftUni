function matchPhoneNumber(input){
    //let regex = /(?<!\d)[+]+359([ -])2\1\d{3}\1\d{4}\b/g;
    let regex = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

    let phoneNumber =[];

    let match = regex.exec(input);

    while(match){
        phoneNumber.push(match);
        match = regex.exec(input);
    }

    console.log(phoneNumber.join(", "));
    
    function phoneNumberMatch(input){
        let phoneNumbers = input[0];
        let regex2 = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
        let result = stringOfPhoneNumbers.match(pattern);

        console.log(result.join(', '));

    }

    function solve(input) {
        let text = input.shift();
        let regEx = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
        let result = text.match(regEx);
        console.log(result.join(', '));
    }
    


}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])