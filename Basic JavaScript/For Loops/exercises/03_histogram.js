function histogram(input) {
    let n = Number(input[0]);

    let range1Count = 0
    let range2Count = 0;
    let range3Count = 0;
    let range4Count = 0;
    let range5Count = 0;

    for (let i = 1; i <= n; i++) {
        let curNum = Number(input[i]);
        if (curNum < 200) {
            range1Count++;
        } else if (curNum <= 399) {
            range2Count++
        } else if (curNum <= 599) {
            range3Count++
        } else if (curNum <= 799) {
            range4Count++;
        } else {
            range5Count++;
        }

    }

    let range1Percent = (range1Count / n) * 100;
    let range2Percent = (range2Count / n) * 100;
    let range3Percent = (range3Count / n) * 100;
    let range4Percent = (range4Count / n) * 100;
    let range5Percent = (range5Count / n) * 100;

    console.log(`${range1Percent.toFixed(2)}%`);
    console.log(`${range2Percent.toFixed(2)}%`);
    console.log(`${range3Percent.toFixed(2)}%`);
    console.log(`${range4Percent.toFixed(2)}%`);
    console.log(`${range5Percent.toFixed(2)}%`);

}
histogram (["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])
