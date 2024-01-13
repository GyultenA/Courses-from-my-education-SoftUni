function loadRepos() {
	//let url = "https://api.github.com/users/testnakov/repos:";
	let buttonLoad = document.querySelector("#load")
	// console.log(buttonLoad)
	buttonLoad.addEventListener("click", repos)

	// const httpRequest = new XMLHttpRequest();
	// httpRequest.addEventListener("readystatechange", function (){
	// 	if(httpRequest.readyState == 4 && httpRequest == 200){
	// 		document.getElementById("res").textContent = httpRequest.responseText
	// 	}
	// })
	// httpRequest.open("GET", url);
	// httpRequest.send()
	function repos() {
		let url = "https://api.github.com/users/testnakov/repos:";
		const request = fetch(url);
		request.then(responseHandler);
		
      }

	  function responseHandler(response){
		console.log("received headers");
		const datapromise = response.json();
		datapromise.then(dataHandler)
	  }

	  function dataHandler(data) {
		console.log("received data");
		document.getElementById("repos").textContent = JSON.stringify(data)
	  }
}