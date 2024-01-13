export function initializer(links) {

    const nav = document.querySelector("nav");
    nav.addEventListener("click", onNavigate);
    const main = document.getElementById("main")

    const contex = {
        showSection,
        goTo,
        updateNav,
    }
    return contex

    //window.showHomeView = showHomeView(contex)

    function showSection(section) {
        main.replaceChildren(section)
    }

    function onNavigate(e) {
        e.preventDefault();
        // console.log("work")
        let target = e.target
        console.log(e.target)

        if (target.tagName === "IMG") {
            target = target.parentElement
        }
        if (target.tagName === "A") {
            const url = new URL(target.href);
            goTo(url.pathname)
        }

    }

    function goTo(name, ...params) {
        const handler = links[name]
        if (typeof (handler) === "function") {
            handler(contex, ...params)
        }
    
    }
    
    function updateNav() {
        const user = JSON.parse(sessionStorage.getItem("user"));
    
        if (user) {
            document.querySelectorAll(".user").forEach(el => el.style.display = "block");
            document.querySelectorAll(".guest").forEach(el => el.style.display = "none");
        } else {
            document.querySelectorAll(".user").forEach(el => el.style.display = "none");
            document.querySelectorAll(".guest").forEach(el => el.style.display = "block");
        }
    }
}