function gladiatorInventory(input) {
    let inventory = input.shift().split(" ");


    for (let i = 0; i < input.length; i++) {
        let [command, equipment] = input[i].split(" ");

        switch (command) {
            case "Buy":
                if (!inventory.includes(equipment));
                inventory.push(equipment);
                break;


            case "Trash":
                if (inventory.includes(equipment)) {
                    inventory.splice(inventory.indexOf(equipment), 1)
                }
                break;

            case "Repair":
                if (inventory.indexOf(equipment) > -1) {
                    let item = inventory.splice(inventory.indexOf(equipment), 1)
                    inventory.push(item)
                }
                break;

            case "Upgrade":
                let itemUpgrade = equipment.split("-");

                for (let i = 0; i < inventory.length; i++) {
                    if (itemUpgrade[0] === inventory[i]) {
                        let newItem = itemUpgrade[0] + ":" + itemUpgrade[1];
                        inventory.splice(i + 1, 0, newItem)
                    }
                }

                break;
        }



    }


    console.log(inventory.join(" "));


}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);
console.log("-----------");
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'])