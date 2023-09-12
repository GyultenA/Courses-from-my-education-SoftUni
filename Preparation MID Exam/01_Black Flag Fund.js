function blackFlag(input) {
    let days = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let target = Number(input[2]);

    let sum = 0;

    for (let i = 1; i <= days; i++) {
        sum += dailyPlunder;

        if (i % 3 === 0) {
            sum += (dailyPlunder / 2)
        }

        if (i % 5 === 0) {
            sum *= 0.70
        }
    }

    let percent = (sum / target) * 100

    if (sum >= target) {
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`)
    } else {
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }

}

blackFlag(["5", "40", "100"]);
console.log("---------");
blackFlag(["10", "20", "380"]);