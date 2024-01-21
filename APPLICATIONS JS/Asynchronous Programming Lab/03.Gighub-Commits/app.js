function loadCommits() {
    const inputName = document.getElementById("username")
   // const inputName = document.querySelector('#username');
   const inputRepo = document.getElementById("repo")
    //const inputRepo = document.querySelector('#repo');
    const ulCommits = document.getElementById("commits")
   // const ulCommits = document.querySelector('#commits');

    let name = inputName.value;
    let repo = inputRepo.value;

    let url = `https://api.github.com/repos/${name}/${repo}/commits`;

    fetch(url)
        .then(response => {
            if (response.status !== 200) {
                throw new Error(`${response.status} (${response.statusText})`);
                //"Error: <error.status> (Not Found)"
            }
            return response.json()
        })
        .then(data => Object.values(data))
        .then(commit => {
            commit.forEach(x => {
               // "<commit.author.name>: <commit.message>" 
                let message = x.commit.message;
                let author = x.commit.author.name;
                let li = document.createElement('li');
                li.textContent = `${author}: ${message}`;
                ulCommits.appendChild(li);
            })
        })
        .catch(error => {
            let li = document.createElement('li');
            li.textContent = error;
            ulCommits.appendChild(li);
        });
}