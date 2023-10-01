function solve() {

    const firstOption = document.createElement("option");
    const secondOption = document.createElement('option');

    firstOption.value = "binary";
    secondOption.value = "hexadecimal";

    firstOption.innerHTML = "Binary";
    secondOption.innerHTML = "Hexadecimal";


    const menuTo = document.getElementById("selectMenuTo")
    menuTo.appendChild(firstOption);
    menuTo.appendChild(secondOption);


    const button = document.getElementsByTagName("button")[0];

    //document.querySelector("#container button").addEventListener("click", convert);
    button.addEventListener("click", convert)

    function convert() {
        let numberInput = document.getElementById("input");

        let outputResult = document.getElementById("result");

        if (menuTo.value === "binary") {
            outputResult.value = Number(numberInput.value).toString(2);
        } else if (menuTo.value === "hexadecimal") {
            outputResult.value = Number(numberInput.value).toString(16).toUpperCase();
        }

        numberInput.value = "";

    }

}