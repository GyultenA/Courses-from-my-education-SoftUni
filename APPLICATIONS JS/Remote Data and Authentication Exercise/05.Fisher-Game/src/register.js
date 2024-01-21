//console.log('TODO:// Implement Register functionality');
///document.querySelector("form").addEventListener("submit", e => {
  //  e.preventDefault()
   // console.log("work")
//})

const registerUrl ="http://localhost:3030/users/register"
document.querySelector("form").addEventListener("submit", onSubmit);


async function onSubmit(event){
    event.preventDefault();
    //event.target
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password= formData.get("password");
    const rePass = formData.get("rePass");

    if(!email || !password || !rePass || password!== rePass){
       // return window.alert("Error")
        throw new Error("Error")
    }

    const data = {
        method: "POST",
        headers:{ "Content-Type": "application/json"},
        body: JSON.stringify({
            email,
            password
        })
    }
    try{
        const response = await fetch(registerUrl, data);
        if(response.status !== 200){
            throw new Error("error")
        }
        const userData = await response.json();
        sessionStorage.setItem("email", userData.email)
        sessionStorage.setItem("userId", userData._id)
        sessionStorage.setItem("accessToken", userData.accessToken)
        window.location.href = "index.html"
        
    } catch(err){
        throw new Error(err)
    }
   
 // window.location.pathname() = "file.html" -pishem imetona file
 //window.location.replace() = ime na fajla
 

}