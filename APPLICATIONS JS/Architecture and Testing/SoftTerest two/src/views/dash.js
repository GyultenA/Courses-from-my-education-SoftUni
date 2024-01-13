import { getAllIdeas } from "../../apid/data.js";

const dash = document.getElementById("dashboard-holder");
dash.addEventListener("click", onDetails)

let ctx = null;

export async function showCatalog(contex){
    ctx= contex
    contex.showSection(dash);

    const ideas = await getAllIdeas();

    if (ideas.length === 0){
        dash.innerHTML = `<h1>No ideas yet! Be the first one :)</h1>`
    } else {
        dash.replaceChildren(...ideas.map(createTemplateIdea))
    }
}

function createTemplateIdea(idea){
  const div = document.createElement("div");
  div.classList = "card overflow-hidden current-card details";
  div.style.width = "20rem";
  div.style.height = "18rem";

  div.innerHTML = `<div class="card-body">
  <p class="card-text">${idea.title}</p>
</div>
<img class="card-image" src="${idea.img}" alt="Card image cap">
<a data-id=${idea._id} class="btn" href="/details">Details</a>`
return div;
}

function onDetails(e){
    if(e.target.tagName === "A"){
        e.preventDefault()
        const id = e.target.dataset.id;
        ctx.goTo("/details", id)
    }
}

