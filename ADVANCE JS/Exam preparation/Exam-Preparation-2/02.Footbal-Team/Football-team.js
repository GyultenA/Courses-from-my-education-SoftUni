class FootballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invetedPlayers = [];
    }

    findPlayer(name) {
        return this.invetedPlayers.find(pl => pl.name === name);
    }


    newAdditions(footballPlayers) {
        let buff = "You successfully invite ";
        let nameArray = []
        footballPlayers.forEach(data => {
            let [name, age, playerValue] = data.split("/");
            playerValue = Number(playerValue);

            let currentPlayer = this.findPlayer(name);

            if (!currentPlayer) {
                this.invetedPlayers.push({
                    name,
                    age,
                    playerValue
                })
                nameArray.push(name);
            } else if (currentPlayer.playerValue < playerValue) {
                currentPlayer.playerValue = playerValue;
            }
        })
        return buff += nameArray.join(", ") + ".";
    }
    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split("/");
        playerOffer = Number(playerOffer);
        let currentPlayer = this.findPlayer(name);

        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (currentPlayer.playerValue > playerOffer) {
            let priceDifference = Math.abs(playerOffer - currentPlayer.playerValue); //currentPlayer.playerValue - playerOffer
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }
        currentPlayer.playerValue = "Bought";

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`

    }
    ageLimit(name, age) {
        let currentPlayer = this.findPlayer(name);
        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (currentPlayer.age >= age) {
            return `${name} is above age limit!`;
        }

        if (age - currentPlayer.age <= 5) {
            let ageDifference = age - currentPlayer.age
            return (`${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`);
        } else if (age - currentPlayer.age > 5) {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        }
    }
    transferWindowResult() {
        let buff = "Player list:\n";
        let sortedPlayer = this.invetedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        sortedPlayer.forEach(pl => {
            buff += `Player ${pl.name}-${pl.playerValue}\n`
        })
        return buff.trim();
    }

}

let fTeam = new FootballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

let fTeam2 = new FootballTeam("Barcelona", "Spain");
console.log(fTeam2.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam2.ageLimit("Lionel Messi", 33));
console.log(fTeam2.ageLimit("Kylian Mbappé", 30));
console.log(fTeam2.ageLimit("Pau Torres", 26));
console.log(fTeam2.signContract("Kylian Mbappé/240"))


