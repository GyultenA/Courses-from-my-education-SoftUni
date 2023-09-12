function stringManipulator(input) {
    let text = input.shift();

    for (let line of input) {
        let tokens = line.split(" ");
        let action = tokens[0];

        switch (action) {
            case "Translate":
                let char = tokens[1];
                let replacement = tokens[2];
                if (text) {
                    text = text.replace(new RegExp(char, "g"), replacement);
                }
                console.log(text)
                break;

            case "Includes":
                let str = tokens[1];
                if (text.includes(str)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;

            case "Start":
                let substr = tokens[1];
                if (text.startsWith(substr)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;

            case "Lowercase":
                text = text.toLowerCase();
                console.log(text);
                break;

            case "FindIndex":
                let charSearch = tokens[1];
                let indexChar = text.lastIndexOf(charSearch);
                console.log(indexChar);
                break;

            case "Remove":
                let startIndex = Number(tokens[1]);
                let count = Number(tokens[2]);
                text = text.substring(0, startIndex) + text.substring(startIndex + count);
                console.log(text)
                break;

        }
    }

}

stringManipulator(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s", "Includes string", "Start //This", "Lowercase", "FindIndex i", "Remove 0 10", "End"])
console.log("-----------------")
stringManipulator(["*S0ftUni is the B3St Plac3**", "Translate 2 o",
    "Includes best", "Start the", "Lowercase", "FindIndex p", "Remove 2 7", "End"])