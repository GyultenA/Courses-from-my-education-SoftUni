import { html } from "./node_modules/lit-html/lit-html.js"
import { userService } from "./userService.js";

const root = document.querySelector("main");

const registerTempalet = (err) => html`
<section id="register">
<article class="narrow">
    <header class="pad-med">
        <h1>Register</h1>
    </header>
    <form @submit=${onSubmit} id="register-form" class="main-form pad-large">
    ${err ? html `<div class="error">${err}.</div>` : ""}
        <label>E-mail: <input type="text" name="email"></label>
        <label>Username: <input type="text" name="username"></label>
        <label>Password: <input type="password" name="password"></label>
        <label>Repeat: <input type="password" name="repass"></label>
        <input class="action cta" type="submit" value="Create Account">
    </form>
    <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
    </footer>
</article>
</section>`

let context = null;

export function showRegisterView(ctx) {
    context = ctx
    context.render(registerTempalet())
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target)
   //const { email, userName, password, rePass} =  Object.fromEntries(formData)
    const email = formData.get("email");
    const userName = formData.get("username")
    const password = formData.get("password");
    const rePass = formData.get("repass");

    if (!email || !userName || !password || !rePass || password.length < 3 || password !== rePass){
  return context.render(registerTempalet("Inputs fields are required"))
    }

    await userService.register(email, userName, password);

    context.updateNav()
    context.goTo("/")
}