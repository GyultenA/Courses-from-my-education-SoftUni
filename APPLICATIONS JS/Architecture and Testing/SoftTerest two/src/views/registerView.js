import { register } from "../../apid/user.js";

const registerSection = document.getElementById("registerview");

const form = registerSection.querySelector("form");
form.addEventListener("submit", onSubmit)

let ctx = null;

export function showRegister(contex) {
    ctx = contex;
    contex.showSection(registerSection)
}

async function onSubmit(e) {
    e.preventDefault();
    const errors = []
    const formData = new FormData(form);
    const { email, password, repeatPassword } = Object.fromEntries(formData)

    if (!email || !password || !repeatPassword) {
        alert("Please fill all fields")
        errors.push("email")
    }

    if (email.length < 3 || password < 3) {
        alert("is too short")
        errors.push("password")
    } 

    if (password !== repeatPassword) {
        alert("Password do not mach")
        errors.push("repeatPassword")
    } else if (!errors.length) {
        await register(email, password)
        alert("Registration successful");
        form.reset();
        ctx.updateNav();
        ctx.goTo("/catalog")
    }
}