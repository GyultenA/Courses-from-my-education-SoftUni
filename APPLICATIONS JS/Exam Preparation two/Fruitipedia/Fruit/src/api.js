
import { userHelper } from "./userHelper.js"

const baseUrl = "http://localhost:3030/"

async function requester(url, method, data) {
    const options = {
        method: method,
        headers: {}
    }

    const userData = userHelper.getUserData();

    if (userData) {
        options.headers["X-Authorization"] = userData.accessToken;
    }

    if (data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(baseUrl + url, options);
        if (response.ok === false) {
            const err = await response.json()
            throw new Error(err.message)
        }

        if (response.status === 204) {
            return response
        }

        return response.json()

    } catch (error) {
       alert("error")
    }

}

export async function get(url) {
    return await requester(url, "GET")
}

export async function post(url, data) {
    return await requester(url, "POST", data)
}

export async function put(url, data) {
    return await requester(url, "PUT", data)
}

export async function del(url) {
    return await requester(url, "DELETE")
}