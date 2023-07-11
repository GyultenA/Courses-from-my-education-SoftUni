function triangleOfNumbers (number){

    let currNumber = "";

    for (let rows = 1; rows <= number; rows++){
        for (let cols = 1; cols <= rows; cols++){
            currNumber += `${rows} `;
        }

        console.log (currNumber);
        currNumber = "";

    }

}

triangleOfNumbers (5)