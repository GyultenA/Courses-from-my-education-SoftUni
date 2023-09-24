function extract(content) {
    let element = document.getElementById(content).textContent;
    let regex = /\(([^)]+)\)/g;
    let result = [];

    let match = regex.exec(element);
    while (match) {
        result.push(match[1])
        match = regex.exec(element)
    }
    return result.join("; ");

}

function extract(content) {
    let element = document.getElementById(content).textContent;
    let regex = /\((.+?)\)/g;
    let result = "";
    let match = regex.exec(element)
    result += match[1];
    while(match !== null){
        result += "; " + match[1]
        match = regex.exec(element)
    }
    return result
}