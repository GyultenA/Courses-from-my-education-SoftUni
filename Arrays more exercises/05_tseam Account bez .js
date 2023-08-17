function solve(arr) {
    let account = arr.shift().split(' ');
   
    
    while (true) {
        
        let [command, game] = arr.shift().split(' ');

        if (command === 'Play!') {
            break;
        }
       
        if (command === "Install") {
            if (!account.includes(game)) {
                account.push(game);
            }
           
        }

       
        else if (command === "Uninstall") {
           
            if (account.includes(game)) {
                let gameIndex = account.indexOf(game);
                account.splice(gameIndex, 1);
             
            }
        }
       
        else if (command === "Update") {
           
            if (account.includes(game)) {
                let gameIndex = account.indexOf(game);
                account.splice(gameIndex, 1);
                account.push(game);
              
            }
        }
       
        else if (command === "Expansion") {
            
            let originalGame = game.split('-')[0];
            if (account.includes(originalGame)) {
                let expansionGame = game.split('-')[0] + ':' + game.split('-')[1];
                let gameIndex = account.indexOf(originalGame);
                account.splice(gameIndex + 1, 0, expansionGame)
            }
        }
    

    }
    console.log(account.join(' '));

}
solve(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!'])