//alert ("work")
import page from "../node_modules/page/page.mjs"
import { catalogView } from "./catalogview.js";
import { createView } from "./createView.js";
//import { dashBoardView } from "./dashboardView.js";
import { detailsView } from "./details.js";
import { editView } from "./editView.js";
import { loginView } from "./loginView.js";
import { logoutView } from "./logoutView.js";
import { myFurnitureView } from "./myfurniture.js";
import { registerView } from "./registerview.js";
import { userData } from "./userDatahelper.js";

const userNav = document.getElementById("user");
const guestNav = document.getElementById("guest");

page ("/", catalogView)
page("/catalog", catalogView);
page("/login", loginView);
//page("/catalog", dashBoardView);
page("/logout", logoutView);
page("/create", createView);
page("/myFurniture", myFurnitureView);
page("/register", registerView);
page("/details/:id", detailsView);
page("/edit/:id", editView);

updateNav();
page.start();

export function updateNav(){
    const userInfo = userData.getUserData();

    if(userInfo){
        userNav.style.display = "inline"
        guestNav.style.display = "none"

    } else {
        userNav.style.display = "none"
        guestNav.style.display = "inline"
    }

}


