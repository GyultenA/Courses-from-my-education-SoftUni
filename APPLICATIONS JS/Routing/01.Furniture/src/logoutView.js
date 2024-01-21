//console.log("logout")
import page from "../node_modules/page/page.mjs"
import { updateNav } from "./app.js";
import { userData } from "./userDatahelper.js";
import { get } from "./api.js"

export async function logoutView(){
    await get("users/logout");
    userData.cleareUserData();
    updateNav();
    page.redirect("/");

}