function fancyBarcodes(data) {
    let countOfBarcodes = Number(data.shift());
 
    let barcodePattern = /@[#]+(?<barcodes>[A-Z][A-Za-z0-9]{4,}[A-Z])@[#]+/;
    let numberPattern = /\d+/g;
 
    for (let i = 0; i < countOfBarcodes; i++) {
        let crrntBarcode = data[i];
        let match = crrntBarcode.match(barcodePattern);
 
        if (!match) {
            console.log("Invalid barcode");
            continue;
        } else {
            let barcode = match.groups.barcodes;
            //let barcode = match[1];
 
            let match2 = barcode.match(numberPattern);
            let productGroup;
 
            if (!match2) {
                productGroup = "00";
            } else {
                productGroup = match2.join("");
            }
 
            console.log(`Product group: ${productGroup}`);
        }
    } 
}

fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);
    console.log("-------------")
fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])