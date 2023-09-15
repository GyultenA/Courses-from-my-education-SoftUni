function trapez(input) {
    let sideA = Number(input[0]);
    let sideB = Number(input[1]);
    let high = Number(input[2]);

    let fase = (sideA + sideB) * high / 2
    console.log(fase.toFixed(2));

}

trapez(["8", "13", "7"]);