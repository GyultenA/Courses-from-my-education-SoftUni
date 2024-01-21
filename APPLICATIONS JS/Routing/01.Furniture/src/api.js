//alert ("work")

import { userData } from "./userDatahelper.js"


const hostUrl = "http://localhost:3030/";

async function requester(method, url, data) {
    const option = {
        method,
        headers: {}
    }
    if (data) {
        option.headers["Content-Type"] = "application/json";
        option.body = JSON.stringify(data);
    }

    const userInfo = userData.getUserData();

    if (userInfo) {
        option.headers["x-authorization"] = userInfo.accessToken;
    }

    try {
        const response = await fetch(hostUrl + url, option) // url-> catalog/create/login...
        if(response.ok === false){
            const error = await response.json()
            throw new Error(error.message)
        }

        if (response.status == 204){
            return response
        }

        return await response.json();

    } catch (error){
       alert (error);
       throw error
    }

}

export function get(url){
    return requester("GET", url);
}

export function post(url, data){
 return requester("POST", url, data);
}

export function put(url, data){
    return requester("PUT", url, data);
}

export function del(url){
    return requester("DELETE", url);
}