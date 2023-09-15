function worldTour(input) {
    let [text, ...commands] = input;

    for (let line of commands) {
        let [action, ...tokens] = line.split(":");

        switch (action) {
            case "Add Stop":
                let index = Number(tokens[0]);
                if (validIndex(index, text)) {
                    let str = tokens[1];
                    text = text.substring(0, index) + str + text.substring(index);
                }
                console.log(text);
                break;

            case "Remove Stop":
                let startIndex = Number(tokens[0]);
                let endIndex = Number(tokens[1]);
                if (validIndex(startIndex, text) && validIndex(endIndex, text)) {
                    text = text.substring(0, startIndex) + text.substring(endIndex + 1);
                }
                console.log(text)
                break;

            case "Switch":
                let oldStop = tokens[0];
                let newStop = tokens[1];
                if (text.includes(oldStop)) {
                    text = text.replace(new RegExp(oldStop, "g"), newStop);
                }
                console.log(text)
                break;

            case "Travel":
                console.log(`Ready for world tour! Planned stops: ${text}`)

        }

    }
    function validIndex(index, text) {
        if (index < 0 || index > text.length - 1) {
            return false
        }
        return true
    }
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
console.log("-------------****----------")
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])
