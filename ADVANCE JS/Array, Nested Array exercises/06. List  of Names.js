function listOfName(names) {
    let sortNames = names.sort((a, b) => a.localeCompare(b));
    sortNames.forEach((element, index) => {
        console.log(`${index + 1}.${element}`);
    });
}

listOfName(["John", "Bob", "Christina", "Ema"])