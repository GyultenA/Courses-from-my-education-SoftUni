
import { getSingleTeam, getTeamById } from "./dataService.js";
import { html } from "./node_modules/lit-html/lit-html.js";
import { userHelper } from "./userHelper.js";


const detailsTemplate = (userData, team, members, isOwner, ismember, isPending) => html`
<section id="team-home">
<article class="layout">
    <img src="./assets/rocket.png" class="team-logo left-col">
    <div class="tm-preview">
        <h2>Team Rocket</h2>
        <p>Gotta catch 'em all!</p>
        <span class="details">${members.length} Members</span>
        <div>
            ${isOwner ? teamActionBtns(isOwner, ismember, isPending) : ""}
        </div>
    </div>
    <div class="pad-large">
        <h3>Members</h3>
        ${isOwner ? memberTemplate(members, isOwner) : ""}
    </div>
    <div class="pad-large">
        <h3>Membership Requests</h3>
        ${isOwner ? memberRequester(isPending):""}
    </div>
</article>
</section>`



const teamActionBtns = (isOwner, ismember, isPending) => html`
<div>
${isOwner ? html`<a href="#" class="action">Edit team</a>` :
    getUserActionBtn(ismember, isPending)} 
</div>`

function getUserActionBtn(ismember, isPending){
  if(ismember){
    return html`<a href="#" class="action invert">Leave team</a>`
  } else if(isPending){
    return html`Membership pending.<a href="#">Cancel request</a>`
  }
  return html `<a href="#" class="action">Join team</a>`
}



const Template = (member, isOwner) => html`
<ul class="tm-members">
    <li>John
        ${isOwner ? html `<a href="#" class="tm-control action">Approve</a>
          <a href="#"class="tm-control action">Decline</a>` : ""}
    </li>
    <li>John
        ${isOwner ? html `<a href="#" class="tm-control action">Approve</a>
         <a href="#"class="tm-control action">Decline</a>` : ""}
    </li>
   </ul>`




const memberTemplate = (member, isOwner) => html`
 <ul class="tm-members">
${member.map(m => userTemplate(member, isOwner))}
</ul>`

const userTemplate = (member, isOwner) => html`
<li>${member.user.username}</li>
 <li>${isOwner ? html`<a href="#" class="tm-control action">Remove from team</a>` : ""}</li>`

const memberRequester = (pendingUsers) => html`
<ul class="tm-members">
${pendingUsers.map(m => pendingmemberTemplate(m.user.username))}
</ul>`


const pendingmemberTemplate=(name)=> html`<li>${name}
<a href="#" class="tm-control action">Approve</a>
<a href="#"class="tm-control action">Decline</a></li>`




export async function showDetailsView(ctx) {
    const id = ctx.params.id
    const userData = await userHelper.getUserData()

    const userId = await userHelper.getUserId()

    const teamInfo = await getTeamById(id);

    const members = await getSingleTeam(id);

    const userWithstatusMember = members.filter(x => x.status === "member")
    const pending = members.filter(x => x.status === "pending")

    const isOwner = userHelper.getUserId() === teamInfo._ownerId

  const isPending = pending.filter(x => x.user._id === userId)
  const ismember = userWithstatusMember.filter(x => x.user._id === userId)

    ctx.render(detailsTemplate(!!userData, teamInfo, userWithstatusMember, pending, isOwner, ismember, isPending))
}





