function loadCommits() {
    // Try it with Fetch API
    const userNameInput = document.getElementById("username");
    const repoInput = document.getElementById("repo");
    const buttonLoad = document.querySelector("button");
    const ulCommit = document.getElementById("commits");

    let username = userNameInput.value;
    let repo = repoInput.value;
    let url = "https://api.github.com";
    buttonLoad.addEventListener("click", commits)

    function commits() {
        


        // https://api.github.com/repos/<username>/<repository>/commits
        fetch(url + "/repos" + "/" + `${username}` + "/" + `${repo}` + "/commits", {
            method: "GET"

        })
            .then(res => {
                if (res.status == 200) {
                    return res.json()
                } else {
                    throw new Error(`${response.status} (${response.statusText})`)
                }
            })
            .then(data => {
                console.log(data)
                data.forEach(element => {
                    let liList = document.createElement("li");
                  //  <commit.author.name>: <commit.message>" 
                  let name = element.commit.author.name
                  let message = element.commit.message;
                    liList.textContent =  `${name}: ${message}`
                    ulCommit.appendChild(liList)
                })
            })
            .catch((err) => {
                let liList = document.createElement("li");
                liList.textContent = err
                ulCommit.appendChild(liList)
            })



    }

}