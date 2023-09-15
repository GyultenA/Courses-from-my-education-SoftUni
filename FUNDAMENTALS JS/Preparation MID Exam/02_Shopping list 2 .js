function shoppingList(input) {
    let list = input.shift().split('!');

    let index = 0
    let command = input[index];
    index++;

    while (command !== "Go Shopping!") {
        let arrayCommand = command.split(' ');
        let item;

        switch (arrayCommand[0]) {
            case "Urgent":
                item = arrayCommand[1]
                if (list.indexOf(item) == -1) {
                    list.unshift(item)
                }
                break;

            case "Unnecessary":
                item = arrayCommand[1]
                if (list.indexOf(item) > -1) {
                    list.splice(list.indexOf(item), 1);
                }
                break;

            case "Correct":
                let oldName = arrayCommand[1];
                let newName = arrayCommand[2];
                let indexElement = list.indexOf(oldName)
                if (indexElement > -1) {
                    list[indexElement] = newName
                }
                break;

            case "Rearrange":
                item = arrayCommand[1]
                if (list.indexOf(item) > -1) {
                    let currentItem = list.splice(list.indexOf(item), 1);
                    list.push(currentItem);
                }
                break;

        }

        command = input[index];
        index++;

    }
    console.log(list.join(', '))

}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);
console.log("---------");
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])