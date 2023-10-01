function subtract() {
    let firstNum = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let substract = Number(firstNum) - Number(secondNumber)
    document.getElementById("result").innerText = substract

    //console.log(res);
}