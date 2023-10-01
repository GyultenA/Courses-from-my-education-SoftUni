function encodeAndDecodeMessages() {
    let myButtons = document.querySelectorAll("button");
    const textAreas = document.querySelectorAll("textarea");

    const encodeButton = myButtons[0];
    const decodeButton = myButtons[1];

    const encodeTextArea = textAreas[0];
    const decodeTextarea = textAreas[1];

    encodeButton.addEventListener("click", encodeHandler);
    decodeButton.addEventListener("click", decodeHandler);

    function encodeHandler(event){
        let currentText = encodeTextArea.value;
        let newMessage = "";

        for (let char of currentText){
            let numValue = Number(char.charCodeAt());
            numValue+= 1;

            newMessage += String.fromCharCode(numValue);
        }
        //debugger

        decodeTextarea.value = newMessage;
        encodeTextArea.value = "";

    }

    function decodeHandler(event){
        let currentValue = decodeTextarea.value;
        let decodeMassage = "";

        for (let char of currentValue){
            let numValue = char.charCodeAt();
            numValue--;
            decodeMassage += String.fromCharCode(numValue);
       //  debugger

        }

        decodeTextarea.value = decodeMassage;

    }
   // debugger


    //console.log('')
}