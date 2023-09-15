function winningTicket(input){

    let tickets = input.split(", ").map(ticket => ticket.trim());

    for (let ticket of tickets){
        let ticketLength = ticket.length;
        if (ticketLength !== 20){
            console.log("invalid ticket");
            continue;
        }

        let regex = /([@#$^])\1{5,}.*?/g;
        let leftPart = ticket.substring(0, ticketLength /2);
        let rigthPart = ticket.substring(ticketLength /2);

        let matchOne = regex.exec(leftPart);
       // let match1 = leftPart.match(regex);
       regex = /([@#$^])\1{5,}.*?/g;
       let matchTwo = regex.exec(rigthPart);

       if(matchOne === null || matchTwo===null){
        console.log(`ticket "${ticket}" - no match`);
        continue;
       }

       let matchingSymbol;
       let matchingSymbolLength;

       if (matchOne[0].length <= matchTwo[0].length){
        matchingSymbol = matchOne[1].substring(0, 1)
        matchingSymbolLength = matchOne[0].length;
       } else {
        matchingSymbol = matchTwo[1].substring(0,1);
        matchingSymbolLength = matchTwo[0].length;
       }

       if (matchingSymbolLength <10){
        console.log(`ticket "${ticket}" - ${matchingSymbolLength}${matchingSymbol}`);
       }

       if (matchingSymbolLength === 10){
        console.log(`ticket "${ticket}" - ${matchingSymbolLength}${matchingSymbol} Jackpot!`);
       }              

    }

}

winningTicket('Cash$$$$$$Ca$$$$$$sh');
console.log("-------")
winningTicket("$$$$$$$$$$$$$$$$$$$$, aabb , th@@@@@@eemo@@@@@@ey");