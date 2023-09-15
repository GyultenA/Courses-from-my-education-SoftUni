function activationKeys(input) {
    let text = input.shift();

    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Generate") {
        let tokens = command.split(">>>");
        let action = tokens[0];

        switch (action) {
            case "Contains":
                let substr = tokens[1];
                if (text.includes(substr)) {
                    console.log(`${text} contains ${substr}`);
                } else {
                    console.log("Substring not found!");
                }
                break;

            case "Flip":
                let changes = tokens[1];
                let startIndex = tokens[2];
                let endIndex = tokens[3];

                let cuttext = text.substring(startIndex, endIndex);

                if (changes === "Upper") {

                    let uppCase = cuttext.toUpperCase()
                    let newText = text.replace(cuttext, uppCase);
                    text = newText;

                    console.log(text)
                } else {
                    let lowCase = cuttext.toLowerCase();
                    let newTextTwo = text.replace(cuttext, lowCase);
                    text = newTextTwo;
                    console.log(text);

                };
                break;

            case "Slice":
                let indexStart = tokens[1];
                let indexEnd = tokens[2];
                let cutTextnew = text.substring(indexStart, indexEnd);
                text = text.replace(cutTextnew, "")
                console.log(text)
                break;
        }

        command = input[index];
        index++;
    }

    console.log(`Your activation key is: ${text}`);
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])