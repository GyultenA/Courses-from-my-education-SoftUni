import { html } from "../../node_modules/lit-html/lit-html.js"
import { userService } from "../src/userService.js";


const registerTemplate = () => html `<section id="register">
<div class="form">
  <h2>Register</h2>
  <form @submit=${submitHandler} class="register-form">
    <input
      type="text"
      name="email"
      id="register-email"
      placeholder="email"
    />
    <input
      type="password"
      name="password"
      id="register-password"
      placeholder="password"
    />
    <input
      type="password"
      name="re-password"
      id="repeat-password"
      placeholder="repeat password"
    />
    <button type="submit">register</button>
    <p class="message">Already registered? <a href="/login">Login</a></p>
  </form>
</div>
</section>`

let context = null;

export function showRegister(ctx){
    //console.log("add")
    ctx.render(registerTemplate())
    context=ctx
}

async function submitHandler(e){
    e.preventDefault()

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const rePass = formData.get("re-password");

    if(!email || !password || !rePass || rePass !== password){
        window.alert("Error")

    }
    await userService.register(email, password)
 context.updateNav()
  context.goTo("/")
}