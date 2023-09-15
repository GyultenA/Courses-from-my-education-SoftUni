function shopping(input) {
    let bujet = Number(input[0]);
    let pcsVideo = Number(input[1]);
    let procesor = Number(input[2]);
    let ram = Number(input[3]);

    let sumVideo = pcsVideo * 250;
    let sumProcesor = sumVideo * 0.35;
    let priceRam = sumVideo * 0.1;
    let sumRam = priceRam * ram;
    let totalSum = sumVideo + sumProcesor + sumRam;
    let totalSumDisc = totalSum - (totalSum * 0.15);
    let save = bujet - totalSumDisc
    let result = Math.abs (save.toFixed(2))

    if (totalSumDisc <= bujet) {
        console.log(`You have ${result} leva left!`)
    } else {
        console.log (`Not enough money! You need ${result} leva more!`)
    }
}

shopping (["920.45", "3","1","1"])	;