import { get, post, del } from "./api.js"

const dataEndPoints = {
    getAll: "data/fruits?sortBy=_createdOn%20desc",
    getSingleFruits: "data/fruits/",

}

async function getAllFruits() {
    return get(dataEndPoints.getAll)
}

async function singleFruit(id) {
   return get(dataEndPoints.getSingleFruits + id)
}

async function createFruit(data) {
   return post(dataEndPoints.getSingleFruits, data)
}

async function updateFruit(id, data) {
   return put(dataEndPoints.getSingleFruits + id, data)
}

async function deleteFruit(id) {
   return del(dataEndPoints.getSingleFruits + id)
}

async function searchText(query) {
    return get(`data/fruits?where=name%20LIKE%20%22${query}%22`)
}

export const dataSevice = {
    getAllFruits,
    singleFruit,
    createFruit,
    updateFruit,
    deleteFruit,
    searchText
}