function santaHelper(array) {
    let num = Number(array.shift());
    let line = array.shift();

    let regex = /[@](?<name>[A-Za-z]+)([^-@!:>]+[!])?(?<behaivior>[G])[!]/gm;

    while (line !== 'end') {

        let lineSubstring = line.split('');
        let lineCode = lineSubstring.map(el => el.charCodeAt() - num);
        let lineString = lineCode.map(el => String.fromCharCode(el));
        let lineJoin = lineString.join('');
        let match = lineJoin.match(regex);

        if (match !== null) {
            let name = regex.exec(lineJoin).groups.name;
            console.log(name);
        }
        line = array.shift();
    }
}

santaHelper(['3',
'CNdwhamigyenumje$J$',
'CEreelh-nmguuejnW$J$',
'CVwdq&gnmjkvng$Q$',
'end']);