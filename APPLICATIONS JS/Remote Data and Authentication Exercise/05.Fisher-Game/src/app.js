//console.log('TODO:// Implement Home functionality');
const loginUrl = "http://localhost:3030/users/login";
const logoutUrl = "http://localhost:3030/users/logout"
const loginBtn = document.getElementById("login")
const registerBtn = document.getElementById("register");
const logoutBtn = document.getElementById("logout");

const addCatchesBtn = document.querySelector("#addForm button")
document.querySelector("form").addEventListener("submit", onCreateCatches)

const catchesDiv = document.getElementById("catches");
catchesDiv.innerHTML = ""

const catchUrl = "http://localhost:3030/data/catches";

const loadBtn = document.querySelector("button.load");
loadBtn.addEventListener("click", onLoad);

const spanEmail = document.querySelector(".email span");
const endPoint = {
    logout: "logout"
}

logoutBtn.addEventListener("click", onLogout)

if (sessionStorage.getItem("userId")) {
    loginBtn.style.display = "none";
    registerBtn.style.display = "none"
    spanEmail.textContent = sessionStorage.getItem("email")
    addCatchesBtn.disabled = false;

} else {
    logoutBtn.style.display = "none";
    spanEmail.textContent = "guest";
}

async function onLogout(e) {
    const response = await fetch(logoutUrl + endPoint.logout, {
        method: "GET",
        headers: { "x-authorization": sessionStorage.getItem("accessToken") }
    })

    sessionStorage.clear();
    window.location.href = "./index.html"

}

async function onLoad(e) {
    const allCatches = await getAllcatches();

    allCatches.forEach(e => {
        const catches = generateCatches(e)
        catchesDiv.appendChild(catches)
    })
}

async function onCreateCatches(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const angler = formData.get("angler")
    const weight = formData.get("weight")
    const species = formData.get("species")
    const location = formData.get("location")
    const bait = formData.get("bait")
    const captureTime = formData.get("captureTime")

    if (!angler || !weight || !species || !location || !bait || !captureTime) {
        throw new Error("missing fields")
    }
    const data = {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-authorizaton": sessionStorage.getItem("accessToken") },
        body: JSON.stringify({
            angler,
            weight,
            species,
            location,
            bait,
            captureTime
        })
    }
    try {
        const response = await fetch(catchUrl, data)
        if (response.status !== 200) {
            throw new Error
        }

    } catch (err) {
        throw new Error()
    }

    e.target.reset()
    onLoad()

}

function generateCatches(e) {
    const div = document.createElement("div");
    div.classList.add("catch");

    const isOwner = e._ownerId === sessionStorage.getItem("userId")

    div.innerHTML = `<label>Angel</label>
    <input type="text" class="angler" value="${e.angler}" disabled>
    <label>Weight</label>
    <input type="text" class="weight" value="${e.weight}" disabled>
    <label>Species</label>
    <input type="text" class="species" value="${e.species}" disabled>
    <label>Location</label>
    <input type="text" class="location" value="B${e.location}" disabled>
    <label>Bait</label>
    <input type="text" class="bait" value="${e.bait}" disabled>
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${e.captureTime}" disabled>
    <button class="update" data-id="${e._id}" disabled>Update</button>
    <button class="delete" data-id="${e._id}" disabled>Delete</button>`;

    if (e._ownerId === sessionStorage.getItem("userId")) {
        const btns = div.querySelectorAll("button")
        Array.from(btns).forEach(x => {
            x.disabled = false // true if !e.+ownerId
            if (x.classList.contains("delete")) {
                return x.addEventListener("click", onDelete)
            }
            x.addEventListener("click", onEdit)
        })
    }
    return div
}

async function onEdit(e) {
    const catchesId = e.target.dataset.id;

    const inputs = e.target.parentElement.querySelectorAll("input")

    const formData = new FormData(e.target)

    const angler = inputs[0].value
    const weight = Number(inputs[1].value)
    const species = inputs[2].value
    const location = inputs[3].value
    const bait = inputs[4].value
    const captureTime = Number(inputs[5].value)
    const _ownerId = sessionStorage.getItem("userId")

    if (!angler || !weight || !species || !location || !bait || !captureTime) {
        throw new Error("missing fields")
    }

    const data = {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime
    }
    const response = await fetch(catchUrl + catchesId, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })

}

async function onDelete(e) {
    const catchesId = e.target.dataset.id;
    const response = await fetch(catchUrl + catchesId, {
        method: "DELETE",
        headers: { "x-authorization": sessionStorage.getItem("accessToken") }
    });

    onLoad()

}



async function getAllcatches() {
    const response = await fetch(catchUrl);
    const data = await response.json()
    return data
}