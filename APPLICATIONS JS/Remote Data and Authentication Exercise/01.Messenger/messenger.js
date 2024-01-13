function attachEvents(){
    document.getElementById("submit").addEventListener("click", addComment);
    document.getElementById("refresh").addEventListener("click", displayAllComments);
    const url = "http://localhost:3030/jsonstore/messenger"

    function addComment(){
       // console.log("")
       const authorName = document.querySelector('[name="author"]')
       const messageText = document.querySelector('[name="content"]')
       if (!authorName.value || !messageText.value )

       fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            author: authorName.value.trim(),
            content: messageText.value.trim()
        })
       })
       .then(response => {
        if(response !== 200) throw new Error("Error")
        return response.json()
       })
       .catch(err => err.message)


    }

    function displayAllComments(){
        fetch(url)
        .then(response => {
            if(response!==200) throw new Error("Erros")
            return response.json()
        })
        .then(data =>{
            const textArea = document.querySelector("#messages");
            const allComments = [];
            Object.values(data). forEach(c => allComments.push(`${c.author}: ${c.content}`))
            textArea.value = allComments.join("\n")
        }).catch(err => alert(err.message))
    }

}
