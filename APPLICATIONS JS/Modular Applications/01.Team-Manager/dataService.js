import { get } from "./api.js"


const dataendPoint = {
    allTeams: "data/teams",
    allMembers: "data/members?where=status%3D%22member%22",
    getTeamById: "data/teams/",
    getMembersForTeam: "data/members"
}

export async function getAllTeam() {
    return await get(dataendPoint.allTeams)
}

export async function getAllMembers() {
    return await get(dataendPoint.allMembers)
}

export async function getTeamById(id) {
    return await get(dataendPoint.getTeamById+id)
}

export async function getSingleTeam(teamId) {
    const queryparams = `?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`
    return await get(dataendPoint.getMembersForTeam + queryparams)
}