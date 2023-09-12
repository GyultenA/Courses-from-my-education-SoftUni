function passwordReset(input) {
    let text = input.shift();
    let oldPassword = text.split("");
    let password = "";
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Done") {
        let line = command.split(" ");
        let action = line[0];

        switch (action) {
            case "TakeOdd":
                for (let i = 0; i < oldPassword.length; i++) {
                    if (i % 2 !== 0) {
                        password += oldPassword[i];
                    }
                }
                console.log(password)
                break;

            case "Cut":
                let givenIndex = Number(line[1]);
                let givenLength = Number(line[2]);
                let currSubstring = password.substring(givenIndex, givenIndex + givenLength);
                password = password.replace(currSubstring, "");
                console.log(password);
                break;

            case "Substitute":
                let substring = line[1];
                let substitute = line[2];
                if (password.includes(substring)) {
                    while (password.includes(substring)) {
                        password = password.replace(substring, substitute);
                    }
                    console.log(password);
                } else {
                    console.log("Nothing to replace!");
                }
                break;
        }

        command = input[index];
        index++;
    }

    console.log(`Your password is: ${password}`);

}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);

    console.log('--------------');
    passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])