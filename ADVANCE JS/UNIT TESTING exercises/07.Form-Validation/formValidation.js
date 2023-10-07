function validate() {
    const companyField = document.getElementById("companyInfo");
    const companyCheck = document.getElementById("company");
    const form = document.getElementById("registerForm");

    companyCheck.addEventListener("change", () => {
        if (companyCheck.checked) {
            companyField.style.display = "block";
        } else {
            companyField.style.display = "none";
        }
    });

  
    const userNameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    const companyNumberInput = document.getElementById("companyNumber");

    const validField = document.getElementById("valid")

    const usernameRegex = /^[a-zA-Z0-9]+$/
    const passwordRegex = /^[\w]+$/
    const emailRegex = /.*@.*\..*/

  

    form.addEventListener("submit", (e) => {
        e.preventDefault();
     
        let usernameIsValid = false
        let passIsValid = false
        let confirmPasswordIsValid = false
        let emailIsValid = false
        let companyNumberIsValid = false

        if (usernameRegex.test(userNameInput.value) && userNameInput.value.length >= 3 && userNameInput.value.length <= 20) {
            usernameIsValid = true
        }

        if (emailRegex.test(emailInput.value)) {
            emailIsValid = true
        }

        if (passwordRegex.test(passwordInput.value) &&
            passwordInput.value.length >= 5 &&
            passwordInput.value.length <= 15 &&
            passwordInput.value === confirmPasswordInput.value) {
            passIsValid = true;
            confirmPasswordIsValid = true;
        }

        if (companyCheck.checked) {
            if (companyNumberInput.value >= 1000 && companyNumberInput.value <= 9999) {
                companyNumberIsValid = true;
            }
        } else {
            companyNumberIsValid = true
        }

        if (usernameIsValid && passIsValid && confirmPasswordIsValid && emailIsValid && companyNumberIsValid) {
            validField.style.display = "block"
        } else {
            validField.style.display = "none"
        }

        if (!usernameIsValid) {
            userNameInput.style.borderColor = "red"
        } else {
            userNameInput.style.border = "none"
        }

        if (!passIsValid) {
            passwordInput.style.borderColor = "red"
        } else {
            passwordInput.style.border = "none"
        }

        if (!confirmPasswordIsValid) {
            confirmPasswordInput.style.borderColor = "red"
        } else {
            confirmPasswordInput.style.border = "none"
        }

        if (!emailIsValid) {
            emailInput.style.borderColor = "red"
        } else {
            emailInput.style.borderColor = "none"
        }

        if (!companyNumberIsValid) {
            companyNumberInput.style.border = "red"
        } else {
            companyNumberInput.style.border = "none"
        }

    })

}
