function santaHelper(array) {
    let num = Number(array.shift());
    let line = array.shift();
    let regex = /[@](?<name>[A-Za-z]+)([^-@!:>]+[!])?(?<behaivior>[G])[!]/gm

    while (line !== 'end') {
        let lineSubstring = line.split('')
        .map(el => el.charCodeAt() - num)
        .map(el => String.fromCharCode(el))
        .join('');

        regex = /[@](?<name>[A-Za-z]+)([^-@!:>]+[!])?(?<behaivior>[G])[!]/gm
        let result = lineSubstring.match(regex);
// ne raboti s match // ne raboti
        if (result) {
            
            let name = result.groups.name;
            console.log(name)
        }
        line = array.shift();
    }
}

santaHelper(['3',
'CNdwhamigyenumje$J$',
'CEreelh-nmguuejnW$J$',
'CVwdq&gnmjkvng$Q$',
'end']);