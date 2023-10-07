function validate() {
    const inputRef = document.getElementById("email");
    inputRef.addEventListener("change", onChange)

    function onChange(event){
        let value = inputRef.value;

        let regex = /[a-z]+@[a-z]+\.[a-z]+/

        regex.test(value) ? 
        inputRef.classList.remove("error"):
        inputRef.classList.add("error");
    }
    
}