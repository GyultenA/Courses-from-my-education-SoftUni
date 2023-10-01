function toggle() {
    let button = document.getElementsByClassName("button")[0];
    const extraText = document.getElementById("extra");

    button.textContent = button.textContent === "More"? "Less": "More";
    if(extraText.style.display === ""){
        extraText.style.display = "none"
    }

    extraText.style.display = extraText.style.display === "none" ? "block" : "none";
   
}