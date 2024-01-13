import { initializer } from "./routers.js";
//import { updateNav } from "./routers.js"
import { showCreateView } from "./src/views/createView.js";
import { showCatalog } from "./src/views/dash.js";
import { showDetails } from "./src/views/details.js";
import { showHomeView } from "./src/views/homeview.js";
import { showLogin } from "./src/views/loginView.js";
import { showRegister } from "./src/views/registerView.js";
import { logoutF } from "./apid/user.js";

//console.log("work")
document.getElementById("section").remove();


const links = {
    "/": showHomeView,
    "/catalog": showCatalog,
    "/login": showLogin,
    "/register": showRegister,
    "/create": showCreateView,
    "/details": showDetails,
    "/logout": async function(){
        await logoutF();
        router.goTo("/")
        router.updateNav()
    }
}

const router = initializer(links);
router.updateNav()
router.goTo("/")




