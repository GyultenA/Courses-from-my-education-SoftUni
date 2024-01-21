import { requester } from "./requester.js"
const url = {
    getAll : "data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc",
    getIdea: "data/ideas/",
    create: "data/ideas/"
}

export async function getAllIdeas(){
    const data = await requester("GET")
    return data
}

export async function getIdeaById(id){
    const data = await requester("GET", url.getSingleIdea+id)
    return data


}

export async function createIdea(data){

}