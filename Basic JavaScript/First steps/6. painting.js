function painting (input) {
    let nylon = Number (input[0]);
    let paint = Number (input [1]);
    let diluent = Number (input[2]);
    let hours = Number (input[3]);

    let nylonSum = (nylon + 2) * 1.50;
    let paintSum = (paint + (paint * 0.1)) * 14.50;
    let diluentSum = diluent * 5
    let bagsSum = 0.40

    let matirials = nylonSum + paintSum + diluentSum + bagsSum;
    let workerPay = (matirials * 0.3) * hours;
    let totalSum = matirials + workerPay

    console.log (totalSum);

}

painting (["10", "11", "4", "8"]);
