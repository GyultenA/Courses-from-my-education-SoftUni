function shoppingList(input) {
    let list = input.shift().split('!');

    let index = 0
    let command = input[index];
    index++;

    while (command !== "Go Shopping!") {
        let arrayCommand = command.split(' ');
        let wordSpecial = arrayCommand[0];
        let item = arrayCommand[1];

        switch (wordSpecial) {
            case "Urgent":
                if (!list.includes(item)) {
                    list.unshift(item)
                }
                break;

            case "Unnecessary":
                if (list.includes(item)) {
                    list.splice(list.indexOf(item), 1);
                }
                break;

            case "Correct":
                let oldName = arrayCommand[1];
                let newName = arrayCommand[2];
                let itemIndex = list.indexOf(oldName);
                if (itemIndex > -1) {
                    list[itemIndex] = newName;
                }
                break;

            case "Rearrange":
                if (list.indexOf(item) > -1) {
                    let currentItem = list.splice(list.indexOf(item), 1)
                     list.push(currentItem)
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