import { html } from "./node_modules/lit-html/lit-html.js";
import { userHelper } from "./userHelper.js";
import { getAllTeam } from "./dataService.js";
import { getAllMembers } from "./dataService.js";


const browseTemplate = (data, isOwner) => html`
<section id="browse">
<article class="pad-med">
    <h1>Team Browser</h1>
</article>
${data.map(item => teamCardTemplate(item))}
 ${isOwner ? createButton() : ""}
</section>`

const createButton = () => html`<article class="layout narrow">
<div class="pad-small"><a href="#" class="action cta">Create Team</a></div>
</article>`

const teamCardTemplate = (item) => html`
<article class="layout">
<img src="${item.logoUrl}" class="team-logo left-col">
<div class="tm-preview">
    <h2>${item.name}</h2>
    <p>${item.description}</p>
    <span class="details">${item.members} Members</span>
    <div><a href="/details/${item._id}" class="action">See details</a></div>
</div>
</article>`

export async function browseTeam(ctx) {
  const userData = userHelper.getUserData()
  const allTeams = await getAllTeam()
  const allMembers = await getAllMembers();
  const result = combineData(allTeams, allMembers)
  ctx.render(browseTemplate(result, !!userData))
}

function combineData(teams, members) {
  const res = [];
  teams.forEach(team => {
    const findMember = members.filter(x => x.teamId === team._id && x.status === "member")
    team.members = findMember.length;
    res.push(team)
  })

  return res
}
