function spiceYield(yield){
    let days = 0;
    let consumesSpiceDaily = 26;
    let totalAmountSpice = 0;

    while (yield >= 100){
        days++;
        totalAmountSpice += yield - consumesSpiceDaily;
        yield -= 10;
    }

    if (totalAmountSpice >= consumesSpiceDaily){
        totalAmountSpice -= consumesSpiceDaily;
    }

    console.log (days);
    console.log (totalAmountSpice);

}

spiceYield (450);