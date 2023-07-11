function lowerOrUpper(letter) {
    let caseResult = "";

    if (letter === letter.toUpperCase()) {
        caseResult = "upper-case";
    } else {
        caseResult = "lower-case";
    }

    console.log(caseResult)

}
lowerOrUpper("L");