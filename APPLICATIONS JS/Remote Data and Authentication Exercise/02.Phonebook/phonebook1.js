

function attachEvents() {
    //console.log('TODO...');
    const urlPhone = "http://localhost:3030/jsonstore/phonebook"
    const personInput = document.getElementById("person");
    const phoneInput = document.getElementById("phone");
    const phoneBook = document.getAnimations("phonebook");
    const loadBtn = document.getElementById("btnLoad");
    const creatBtn = document.getElementById("btnCreate");
    loadBtn.addEventListener("click", loadContact);
    creatBtn.addEventListener("click", createPhoneContact);

    async function createPhoneContact() {
        // console.log("work")
        if (phoneInput.value === "" || personInput.value === "") {
            return alert("All fields must be fill")
        }
        await fetch(urlPhone, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                person: personInput.value,
                phone: phoneInput.value
            })
        })
        personInput.value = "";
        phoneInput.value = "";
        loadBtn.click()
    }

    async function loadContact() {
        phoneBook.innerHTML = ""
        const response = await fetch(urlPhone);
        const data = await response.json()
        // console.log(data)
        Object.values(data).forEach(el => {
            const liElement = document.createElement("li")
            liElement.textContent = `${el["person"]}: ${el["phone"]}`
            const deleteBtn = document.createElement("button");
            deleteBtn.setAttribute(`id`, el["_id"]);
            deleteBtn.textContent = "Delete"
            liElement.appendChild(deleteBtn)
            phoneBook.appendChild(liElement)

            deleteBtn.addEventListener("click", async (e) => {
                //console.log("work")
                //console.log(e.target)
                //console.log(e.target.id)
                const userid = e.target.id
                const targetUrl = `${urlPhone}/${userid}`
                await fetch(targetUrl, {
                    method: "DELETE"
                })

                e.target.parentNode.remove();
            })
        })
    }
}

attachEvents();