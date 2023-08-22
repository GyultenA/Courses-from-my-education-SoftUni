function rangeQuit(input) {
    let series = input[0].split(/[0-9]+/).filter((x) => x != '');
    let repeaters = input[0].split(/[^0-9]+/).filter((x) => x != '');
    let result = '';
    for (let i = 0; i < series.length; i++) {
        result += series[i].toUpperCase().repeat(repeaters[i]);
    }
    console.log(`Unique symbols used: ${[...new Set(result)].length}`);
    console.log(result);
}

rangeQuit('aSd2&5s@1'); // ne raboti

function rageQuit(input) {
    let uniqueSymbols = [...new Set(input[0].match(/[^0-9]/g).map((x) => x.toUpperCase()))];
    let series = input[0].split(/[0-9]+/).filter((x) => x != "");
    let repeaters = input[0].split(/[^0-9]+/).filter((x) => x != "");
 
    console.log(`Unique symbols used: ${uniqueSymbols.length}`);
 
    let result = "";
 
    for (let i = 0; i < series.length; i++) {
        result += series[i].toUpperCase().repeat(repeaters[i]);  
    }
 
    console.log(result); //ne raboti napylno
}

rageQuit('aSd2&5s@1'); 