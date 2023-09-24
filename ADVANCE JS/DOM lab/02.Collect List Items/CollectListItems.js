function extractText() {
    // TODO
    let list = document.querySelectorAll("ul#items li");
    let textarea = document.querySelector("#result");
    for (let item of list){
        textarea.value += item.textContent + "\n"
    }
}