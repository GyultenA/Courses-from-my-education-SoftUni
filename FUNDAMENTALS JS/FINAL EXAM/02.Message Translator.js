function messageTranslator(input){
    let count = input[0];
    let arrLetters = []
    let regex = /[!](?<command>[A-Z][a-z]{3,})[!][:]\[(?<letters>[A-Za-z]{7,})\]/

    for (let i = 1; i <= count; i++){
        let current = input[i];
        let result = current.match(regex);
         if(!result){
            console.log("The message is invalid");
            continue;
         } else {
            let command = result.groups.command;
            let letters = result.groups.letters;
             for (let char of letters){
                let num = char.charCodeAt()
                arrLetters.push(num)
             }
            console.log(`${command}: ${arrLetters.join(" ")}`);
         }
    }

}

messageTranslator(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready"]);
console.log("--------------------")
messageTranslator(["3", "go:[outside]", "!drive!:YourCarToACarWash", "!Watch!:[LordofTheRings]"]);