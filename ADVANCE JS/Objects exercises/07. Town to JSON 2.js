function townsToJSON(input) {
    const towns = [];
 
    const regex = new RegExp(/\s*\|\s*/);
    for (const line of input.splice(1)) {
        let tokens = line.split(regex).filter(Boolean);
        towns.push({
            Town: tokens[0],
            Latitude: Number(Number(tokens[1]).toFixed(2)),
            Longitude: Number(Number(tokens[2]).toFixed(2))
        });
    }
 
    return JSON.stringify(towns);
}
console.log(townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));
console.log('+++++++++');
console.log(townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]));