import page from "./node_modules/page/page.mjs";
import { render } from "./node_modules/lit-html/lit-html.js";

import { showRegisterView } from "./registerView.js";
import { showLoginView } from "./loginView.js";
import { userService } from "./userService.js";
import { userHelper } from "./userHelper.js";
import { showHomeView} from "./homeView.js"
import { browseTeam } from "./browse.js";
import { showDetailsView } from "./details.js";

//console.log("work")
const root = document.querySelector("main");

const userA = document.querySelectorAll("nav .user");
const guestA = document.querySelectorAll("nav .guest");

page(decorationContext)
//page("/", () => console.log("work") )
//page("/browse", () => console.log("work") )
//page("/login", () => console.log("work") )
//page("/regsiter", () => console.log("work") )
/
//page("/myTeams", () => console.log("work") )

page("/register", showRegisterView)
page("/login", showLoginView)
page("/logout", logout)
page ("/", showHomeView)
page("/browse", browseTeam)
page('/details/:id', showDetailsView)

async function logout(){
 await userService.logout()
 updateNav()
 goTo("/")
}

page.start();
updateNav()


function decorationContext(ctx, next){
    ctx.render = renderer();
    ctx.updateNav= updateNav()
    ctx.goTo = goTo()

    next()
}

function renderer(template){
    render(template, root)
}

function updateNav(){
    const userData = userHelper.getUserData()

    if(userData){
        userA.forEach(a => a.style.display = "block");
        guestA.forEach(a => a.style.display = "none")
    } else {
        userA.forEach(a => a.style.display = "none");
        guestA.forEach(a => a.style.display = "block")
    }
}

function goTo(path){
  page.redirect(path)
}

