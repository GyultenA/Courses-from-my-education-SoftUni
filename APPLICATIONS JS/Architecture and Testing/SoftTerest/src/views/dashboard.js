import { getAllIdeas } from "../data.js";
import { createElement } from "../dom.js";

const section = document.getElementById('dashboard-holder');
section.remove();
section.addEventListener('click', onDetails);

let context = null;

export async function showDashboardPage(ctxTarget) {
    context = ctxTarget;
    context.showSection(section);
    loadIdeas();
}

async function loadIdeas() {
    const ideas = await getAllIdeas();

    if (ideas.length == 0) {
        section.replaceChildren(e('h1', {}, 'No ideas yet! Be the first one :)'));

        /* <h1>No ideas yet! Be the first one :)</h1> */

    } else {
        const fragment = document.createDocumentFragment();

        ideas.map(createIdeaCard).forEach(i => fragment.appendChild(i));
    
        section.replaceChildren(fragment);
    }
}

function createIdeaCard(idea) {
    const element = createElement('div', { className: 'card overflow-hidden current-card details' });
    element.style.width = '20rem';
    element.style.height = '18rem';

    element.innerHTML = `
        <div class="card-body">
            <p class="card-text">${idea.title}</p>
        </div>
        <img class="card-image" src="${idea.img}" alt="Card image cap">
        <a data-id="${idea._id}" class="btn" href="">Details</a>`;

    return element;
}

function onDetails(event) {
    if (event.target.tagName == 'A') {
        const id = event.target.dataset.id;
        event.preventDefault();
        context.goTo('details', id);
    }
}