function deserializeString(input) {

    let line = input.shift();
    let result = [];

    while (line !== 'end') {
        let [char, indexes] = line.split(':');
        indexes = indexes.split('/').map(Number);

        for (let index of indexes) {
            result[index] = char;
        }
        line = input.shift();
    }
    console.log(result.join(''));

}
deserializeString(['a:0/2/4/6', 'b:1/3/5', 'end']);