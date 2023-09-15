function solve(arr) {
    let account = arr.shift().split(' ');
    // let firstCurrentCommand = arr[0];
    // firstCurrentCommand = firstCurrentCommand.split(' ');
    // let currentCommand = arr.shift();
    // let newArr = [];
    // newArr.push(firstCurrentCommand);

    // while (currentCommand !== "Play!") {
    while (true) {
        // currentCommand = currentCommand.split(" ");
        let [command, game] = arr.shift().split(' ');

        if (command === 'Play!') {
            break;
        }
        // for (let i = 0; i < arr.length; i++) {
        // for (let j = 0; j < firstCurrentCommand.length; j++) {

        // if (currentCommand[i] === "Install") {
        if (command === "Install") {
            if (!account.includes(game)) {
                account.push(game);
            }
            // break;
        }

        // if (currentCommand[i] === "Uninstall") {
        else if (command === "Uninstall") {
            // if (currentCommand[i + 1] === firstCurrentCommand[j]) {
            if (account.includes(game)) {
                let gameIndex = account.indexOf(game);
                account.splice(gameIndex, 1);
                // firstCurrentCommand.splice(j, 1);
                // break;
            }
        }
        // if (currentCommand[i] === "Update") {
        else if (command === "Update") {
            // if (currentCommand[i + 1] === firstCurrentCommand[j]) {
            if (account.includes(game)) {
                let gameIndex = account.indexOf(game);
                account.splice(gameIndex, 1);
                account.push(game);
                // newArr.push(firstCurrentCommand[j]);
                // firstCurrentCommand.splice(j, 1);
                // break;
            }
        }
        // if (currentCommand[i] === "Expansion") {
        else if (command === "Expansion") {
            // firstCurrentCommand.push(currentCommand[i + 1].split('-').join(':'));
            // break;
            let originalGame = game.split('-')[0];
            if (account.includes(originalGame)) {
                let expansionGame = game.split('-')[0] + ':' + game.split('-')[1];
                let gameIndex = account.indexOf(originalGame);
                account.splice(gameIndex + 1, 0, expansionGame)
            }
        }
        // }

        // }
        // currentCommand = arr.shift();

    }
    console.log(account.join(' '));

}function solve(arr) {
    let account = arr.shift().split(' ');
    // let firstCurrentCommand = arr[0];
    // firstCurrentCommand = firstCurrentCommand.split(' ');
    // let currentCommand = arr.shift();
    // let newArr = [];
    // newArr.push(firstCurrentCommand);

    // while (currentCommand !== "Play!") {
    while (true) {
        // currentCommand = currentCommand.split(" ");
        let [command, game] = arr.shift().split(' ');

        if (command === 'Play!') {
            break;
        }
        // for (let i = 0; i < arr.length; i++) {
        // for (let j = 0; j < firstCurrentCommand.length; j++) {

        // if (currentCommand[i] === "Install") {
        if (command === "Install") {
            if (!account.includes(game)) {
                account.push(game);
            }
            // break;
        }

        // if (currentCommand[i] === "Uninstall") {
        else if (command === "Uninstall") {
            // if (currentCommand[i + 1] === firstCurrentCommand[j]) {
            if (account.includes(game)) {
                let gameIndex = account.indexOf(game);
                account.splice(gameIndex, 1);
                // firstCurrentCommand.splice(j, 1);
                // break;
            }
        }
        // if (currentCommand[i] === "Update") {
        else if (command === "Update") {
            // if (currentCommand[i + 1] === firstCurrentCommand[j]) {
            if (account.includes(game)) {
                let gameIndex = account.indexOf(game);
                account.splice(gameIndex, 1);
                account.push(game);
                // newArr.push(firstCurrentCommand[j]);
                // firstCurrentCommand.splice(j, 1);
                // break;
            }
        }
        // if (currentCommand[i] === "Expansion") {
        else if (command === "Expansion") {
            // firstCurrentCommand.push(currentCommand[i + 1].split('-').join(':'));
            // break;
            let originalGame = game.split('-')[0];
            if (account.includes(originalGame)) {
                let expansionGame = game.split('-')[0] + ':' + game.split('-')[1];
                let gameIndex = account.indexOf(originalGame);
                account.splice(gameIndex + 1, 0, expansionGame)
            }
        }
        // }

        // }
        // currentCommand = arr.shift();

    }
    console.log(account.join(' '));

}
solve(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!'])