function fancyBarcodes(input) {
    let count = input.shift();
    let regex = /(@#+)(?<barcode>[A-Z][a-zA-Z0-9]{4,}[A-Z])(@#+)/;
            ///@#+(?<barcode>[A-Z][A-Za-z\d]{4,}[A-Z])@#+/
    //let pattern = /(@#+)([A-Z][a-zA-Z0-9]{4,}[A-Z])(@#+)/
    let pattern = /[0-9]/g
    let result = '';

    for (let i = 1; i <= count; i++) {
        let line = input[i];
        let match = regex.exec(line);
        result = "";

        if (match) {
            for (let element of match.groups.barcode) {
                if (element.charCodeAt() >= 48 && element.charCodeAt() <= 57) {
                    result += element;
                }

            }

            if (result === "") {
                console.log("Product group: 00")
            } else {
                console.log(`Product group: ${result}`);
            }
        } else {
            console.log("Invalid barcode");
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
