
const routes = {
    "/home": () => "<h1>Home</h1>",
    "/about": () => "<h1>About</h1>",
    "/contact": () => "<h1>Contacts</h1>"
}

const root = document.getElementById("root");
const body = document.querySelector("body");

body.addEventListener("click", (e) => {
    if (e.target.tagname === "A"){
        e.preventDefault()
        //const href = e.target.href;
        //console.log("href:", href)
        const href = new URL(e.target.href)
        const pathname = href.pathname;
        console.log(pathname)
        history.pushState({}, "", pathname);
        root.innerHTML = routes[pathname]();
    }
})

window.addEventListener("popstate", () => {
    const href = new URL(e.target.href)
    const pathname = href.pathname;
})


if (window.location.pathname == "/"){
    root.innerHTML = routes["/home"]();
}
root.innerHTML = routes[window.location.pathname]();















