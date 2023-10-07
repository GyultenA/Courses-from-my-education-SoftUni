function notify(message) {
  const divRef = document.getElementById("notification");

  divRef.textContent = message;
  divRef.style.display = "block"

  divRef.addEventListener("click", disappear)

  function disappear(event){
    divRef.style.display = "none"

  }
}