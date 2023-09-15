function pipesInPool(input) {
    let poolVolumeLitres = Number(input[0]);
    let firstPipeDebit = Number(input[1]);
    let secondPipeDebit = Number(input[2]);
    let wokerAbsentHours = Number(input[3]);

    let firstPipeLiters = wokerAbsentHours * firstPipeDebit;
    let secondPipeLiters = wokerAbsentHours * secondPipeDebit;
    let totalPipeWater = firstPipeLiters + secondPipeLiters;

    let firstPipePercent = (firstPipeLiters / totalPipeWater) * 100;
    let secondPipePercent = (secondPipeLiters / totalPipeWater) * 100;

    let totalPercent = (totalPipeWater / poolVolumeLitres) * 100

    if (totalPipeWater <= poolVolumeLitres) {
        console.log(`The pool is ${totalPercent.toFixed(2)}% full. Pipe 1: ${firstPipePercent.toFixed(2)}%. Pipe 2: ${secondPipePercent.toFixed(2)}%.`);
    } else {
        let overflowing = totalPipeWater - poolVolumeLitres;
        console.log(`For ${wokerAbsentHours} hours the pool overflows with ${overflowing} liters.`);
    }
}

pipesInPool(["100", "100", "100", "2.5"]);


