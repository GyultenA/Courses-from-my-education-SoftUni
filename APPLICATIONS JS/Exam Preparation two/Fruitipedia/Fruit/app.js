import { html, render } from "../node_modules/lit-html/lit-html.js"
import page from "../node_modules/page/page.mjs"

import { showAdd } from "./views/add.js"
import { showdashboard } from "./views/dashboard.js"
import { showDetails } from "./views/details.js"
import { showEdit } from "./views/edit.js"
import { showHome } from "./views/home.js"
import { showLogin } from "./views/login.js"
import { showRegister } from "./views/register.js"
import { showSearch } from "./views/search.js"

import { userHelper } from "./src/userHelper.js"
import { userService } from "./src/userService.js"
//import { deleteView } from "./views/delete.js"

const root = document.querySelector("main")
const userA = document.querySelector(".user")
const guestA = document.querySelector(".guest")

page(decorationContext)

page("/index.html", showHome)
page("/login",showLogin)
page("/logout",logout)
page("/dashboard",showdashboard)
//page("/delete", deleteView)
page("/details/:id", showDetails)
page("/edit/:id", showEdit)
page("/search", showSearch)
page("/register", showRegister)
page("/add", showAdd)
page("/", showHome)


page.start()
updateNav()

async function logout(){
    await userService.logout()
    updateNav()
    goTo("/")
}

function decorationContext(ctx, next){
  ctx.render = renderer;
  ctx.goTo = goTo;
  ctx.updateNav = updateNav;

  next()
}

function renderer(template){
    render (template, root)
}

function updateNav(){
    const userData = userHelper.getUserData();

    if(userData){
        userA.style.display = "block"
        guestA.style.display = "none"
    } else {
        userA.style.display = "none"
        guestA.style.display = "block"
    }
}

function goTo(path){
 page.redirect(path)
}