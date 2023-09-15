function catedra(input) {
    let w = Number (input[0]);
    let h = Number (input[1]);
    let wcm = w * 100;
    let hcm = h * 100;

    let rows = wcm - 60;
    let rowsTr = Math.ceil(rows/120);
   
    let buroRows = hcm -100-20;
    let buroRowsTr = Math.ceil (buroRows / 70);
    

    let buroTotal = Math.ceil(rowsTr) * Math.ceil (buroRowsTr) - 3

    console.log (buroTotal);

}

catedra (["15", "8.9"]);