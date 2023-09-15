function destinationMap(input){
    let regex = /[=\/][A-Z][A-Za-z]{2,}[=\/]/gm
    let text = input.match(regex);
    let result = [];
    let points = 0;

    if(text){
        text.forEach(element =>{
            if(element[0] === element[element.length-1]){
                element = element.substring(1, element.length-1);
                result.push(element);
                points += element.length;
            }
        });

    }
 console.log(`Destinations: ${result.join(', ')}`);
 console.log(`Travel Points: ${points}`);

}

destinationMap("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")