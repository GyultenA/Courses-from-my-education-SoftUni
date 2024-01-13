import * as api from "./api.js"
//import { getAllIdeas} from "./apid.js"

const endPoint = {
    "getAllIdeas": "data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc",
    "createIdea":"data/ideas",
    "ideaById": "data/ideas/"//:id",
}

export function getAllIdeas(){
    return api.get(endPoint.getAllIdeas);
}

export function createIdea(idea){
    return api.post(endPoint.createIdea, idea);
}

export function ideaById(id){
    return api.get(`${endPoint.ideaById}${id}`);
}

export async function deleteIdea(id){
    return api.delet(`${endPoint.ideaById}${id}`);
}