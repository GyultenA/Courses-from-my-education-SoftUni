function lockedProfile() {
    //console.log(Array.from(document.querySelectorAll(".profile button")))
    Array.from(document.querySelectorAll(".profile button")).forEach(e => e.addEventListener("click", onClick));


    function onClick(event) {
        const parent = event.target.parentElement;
        const unlockedChek = parent.querySelector('input[value="unlock"]');

        if (unlockedChek.checked) {
            let hiddenDiv = parent.querySelector("div");
            hiddenDiv.style.display === "block" ? (hiddenDiv.style.display = "none") : (hiddenDiv.style.display = "block");

            event.target.textContent === "Show more" ? (event.target.textContent = "Hide it") : (event.target.textContent = "Show more");

            //console.log(unlockedChek.checked);
        }
    }
}