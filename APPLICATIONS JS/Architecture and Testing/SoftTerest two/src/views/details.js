import { ideaById, deleteIdea } from "../../apid/data.js"

const details = document.getElementById("details")


export async function showDetails(contex, id){
    const idea = await ideaById(id)
    contex.showSection(details);
    const userData = JSON.parse(sessionStorage.getItem("user"))

    const isOwner = userData && userData._id === idea._ownerId;

    details.innerHTML = createIdeaTemplate(idea, isOwner);

    if(isOwner){
        details.querySelector("a").addEventListener("click", async(e) => {
            e.preventDefault()
            await deleteIdea(id);
            contex.goTo("/catalog")
        })
    }
}

function createIdeaTemplate(idea, isOwner){
    let html = `<img class="det-img" src="${idea.img}" />
    <div class="desc">
        <h2 class="display-5">${idea.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${idea.description}</p>
    </div>`

    if(isOwner){
        html += `<div class="text-center">
        <a class="btn detb" href="">Delete</a>
    </div>`
    }

    return html
}