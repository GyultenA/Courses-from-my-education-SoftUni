import { getById } from "./src/data.js";
import { deleteById } from "../data.js";
import { createElement} from "../dom.js";

const section = document.getElementById('detailsPage');
section.remove();

let context = null;

export async function showDetailsPage(ctxTarget, id) {
    context = ctxTarget;
    context.showSection(section);
    loadIdea(id);
}

async function loadIdea(id) {
    const idea = await getById(id);

    section.replaceChildren(createIdeaDiv(idea));
}

function createIdeaDiv(idea) {
    const fragment = document.createDocumentFragment();

    fragment.appendChild(e('img', { className: 'det-img', src: idea.img }));
    fragment.appendChild(e('div', { className: 'desc' },
        createElement('h2', { className: 'display-5' }, idea.title),
        createElement('p', { className: 'infoType' }, 'Description:'),
        createElement('p', { className: 'idea-description' }, idea.description))
    );

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData && userData.id == idea._ownerId) {
        fragment.appendChild(e('div', { className: 'text-center' },
            createElement('a', { className: 'btn detb', href: '', onClick: onDelete }, 'Delete')
        ));
    }


    async function onDelete(event) {
        event.preventDefault();

        const confirmed = confirm('Are you sure you want to delete this idea?');

        if (confirmed) {
            await deleteById(idea._id)
            context.goTo('dashboard')
        }
    }

    return fragment;
}