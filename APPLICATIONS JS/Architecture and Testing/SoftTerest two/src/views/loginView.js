import { login} from "../../apid/user.js";

const loginSection = document.getElementById("loginview" );
const form = loginSection.querySelector("form");
form.addEventListener("submit", onSubmit)

let ctx = null;

export function showLogin(contex){
    ctx = contex
    contex.showSection(loginSection)
}

async function onSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email")
    const password = formData.get("password")

     await login(email, password);

       form.reset()
        ctx.updateNav();
        ctx.goTo("/catalog")
 
}
