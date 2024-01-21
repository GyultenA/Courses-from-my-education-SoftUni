
const routes = {
    "#home": () => "<h1>Home</h1>",
    "#about": () => "<h1>About</h1>",
    "#contact": () => "<h1>Contacts</h1>"
}
const root = document.getElementById("root")

//const hash = window.location.hash
//console.log(hash)

window.addEventListener("hashchange", () =>{
    const hash = window.location.hash
console.log(hash)
root.innerHTML = routes[hash]()
})

root.innerHTML = routes[window.location.hash || "#home"]()