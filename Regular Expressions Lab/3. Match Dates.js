function matchDates(input){
    let regex= /\b(?<day>\d{2})([.-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
                      /\b\d{2}([.\/-]+?)(?<month>[A-Z][a-z]{2})\1(?<year>\d{4})\b/g;
               /\b(?<day>\d{2})([/\.-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let validDates = [];

    let matchDate = regex.exec(input);

    while(matchDate !== null){
        
        let day = matchDate.groups["day"];
        let month = matchDate.groups["month"];
        let year = matchDate.groups["year"];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
        matchDate = regex.exec(input);
    }
    


}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])