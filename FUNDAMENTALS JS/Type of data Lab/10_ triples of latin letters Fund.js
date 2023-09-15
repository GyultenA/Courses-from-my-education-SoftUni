function triplesLetters (num){

    let n = Number (num);

    for (let i = 0; i < n; i++){
        let firstLetter = String.fromCharCode(i + 97);

         for (let x = 0; x < n; x++){
            let secondLetter = String.fromCharCode(x + 97);

            for (let y = 0; y < n; y++){
                let thirdLetter = String.fromCharCode(y + 97);
                console.log (`${firstLetter}${secondLetter}${thirdLetter}`);
            }
         }

    }

    
    

}

triplesLetters ("3")