const host = "http://localhost:3030/";

async function requester(method, url, data) {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const options = {
        method: method,
        headers: {}
    }

    if (data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    if (user) {
        const token = user.accessToken;
        options.headers["X-Authorization"] = token;
    }

    try {
        const response = await fetch(`${host}${url}`, options);
        if(!response.ok){
            if(response.status === 403){
                sessionStorage.removeItem("user");
                //throw new Error("Access denied");
            }
            const err = await response.json()
            throw new Error(err.message)
        }
         if(response.status === 204){
                return response
            } else {
                return response.json()
            }
        
    } catch (error){
        alert(error.message)
        throw error
    }

}

const get = requester.bind(null, "GET");
const post = requester.bind(null, "POST")
const put = requester.bind(null, "PUT")
const delet = requester.bind(null, "DELETE")

export {
    get, post, put, delet
}