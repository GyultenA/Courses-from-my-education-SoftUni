let button = document.querySelector("#load");
button.addEventListener("click", loadRepos);

let httpRequest = null;

function loadRepos(){
    let url = 'https://api.github.com/users/testnakov/repos';

    httpRequest = new XMLHttpRequest();
    httpRequest.addEventListener("readystatechange", displayRepos);
    httpRequest.open("GET", url);
    httpRequest.send();
}
 function displayRepos(){
    if(httpRequest.readyState == 4 && httpRequest.status ==200){
        document.getElementById("res").textContent = httpRequest.responseText;
    }
 }