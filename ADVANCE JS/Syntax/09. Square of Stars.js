function squareStars(size) {
    let result = "";

    if (size === null || size === "" || size === 0) {
        for (let i = 0; i < 5; i++) {
            console.log("* ".repeat(5).trim())
        }
    }

    for (let i = 1; i <= size; i++) {
        result += "* ".repeat(size);
        result += "\n";
    }

    console.log(result);

}
squareStars(0);
console.log("---------------");
squareStars(2);
console.log("-----------------");
squareStars(5);