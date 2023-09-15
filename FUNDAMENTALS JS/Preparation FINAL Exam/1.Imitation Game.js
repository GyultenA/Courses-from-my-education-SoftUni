function imitationGame(input){
    let text = input.shift();

    for(let line of input){
        if (line === "Decode"){
            break;
        }
        let tokens = line.split("|");
        let action = tokens[0];
        
        switch(action){
            case "ChangeAll":
                let substring = tokens[1];
                let replacement = tokens[2];
                while(text.includes(substring)){
                   text = text.replace(substring,replacement);
                }
                break;

            case "Insert":
                let currIndex = tokens[1];
                let value = tokens[2];
                text = text.substring(0,currIndex)+value+text.substring(currIndex)
            break;

            case "Move":
                let numLetters = tokens[1];
                for (let i = 0; i < numLetters; i++){
                    let firstLetter = text.substring(0,1);
                    let nextLetter = text.substring(1);
                    text = nextLetter+firstLetter;
                }

                break;
        }
        
    }

    console.log(`The decrypted message is: ${text}`)

}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
    ])