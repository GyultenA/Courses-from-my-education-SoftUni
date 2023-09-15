function secretChat(input) {
    let message = input.shift();

    for (let line of input) {
        if (line === "Reveal") {
            break;
        }
        let tokens = line.split(":|:");
        let action = tokens[0];

        switch (action) {
            case "ChangeAll":
                let substr = tokens[1];
                let replacement = tokens[2];
                while (message.includes(substr)) {
                    message = message.replace(substr, replacement);
                }
                console.log(message);
                break;

            case "Reverse":
                let text = tokens[1];
                if (message.includes(text)) {
                    let startIndex = message.indexOf(text);
                    let cut = message.substring(startIndex, message.length);
                    let reverseText = "";
                    for (let i = cut.length-1; i >= 0; i--) {
                        let char = cut[i]
                        reverseText += char
                    }
                  
                    let newMessage = message.substring(0, startIndex)+ reverseText;
                    message= newMessage
                    console.log(message)
                } else {
                    console.log("error")
                }
                break;

            case "InsertSpace":
                let index = Number(tokens[1]);
                let part = message.substring(0,index);
                let part2 = message.substring(index, message.length);
                let space = part + " " + part2;
                message = space;
                console.log(message)
                break;
        }

    }

    console.log(`You have a new text message: ${message}`);

}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']);
console.log("-------------");
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'])