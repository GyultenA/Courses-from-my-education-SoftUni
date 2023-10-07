function requestValidator(obj) {
    const validMethod = ["GET", "POST", "DELETE", "CONNECT"];
    const uriRegex = /^[\w.]+$/g;
    const validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0 "];
    const specialChar = [`<`, `>`, `\\`, `&`, `'`, `"`]

    if (!validMethod.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
        
    }
    // vtori nachin
    //if (obj.method !== "GET" && obj.method !== "POST" && obj.method !== "DELETE" && obj.method !== "CONNECT"){
    //throw new Error("Invalid request header: Invalid Method");
    //}

    if (!obj.uri || obj.uri !== "*" && !obj.uri.match(uriRegex)) {
        throw new Error("Invalid request header: Invalid URL");

    }

    if (!validVersion.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if (!obj.hasOwnProperty("message")) {
        throw new Error("Invalid request header: Invalid Message");
    }

    for (let el of obj.message) {
        if (specialChar.includes(el)) {
            throw new Error("Invalid request header: Invalid Message");
        }
    }

    return obj

}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
console.log(requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  }));
  //console.log(requestValidator())