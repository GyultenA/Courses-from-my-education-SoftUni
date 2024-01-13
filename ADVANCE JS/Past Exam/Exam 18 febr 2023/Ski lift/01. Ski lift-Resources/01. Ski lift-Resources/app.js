window.addEventListener('load', solve);

function solve() {
    //console.log("work")
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const countPeopleInput = document.getElementById("people-count");
    const fromdateInput = document.getElementById("from-date");
    const daysInput = document.getElementById("days-count");
    //console.log(firstNameInput, lastNameInput, countPeopleInput, fromdateInput, daysInput);
    const nextStepsbtn = document.getElementById("next-btn");
    nextStepsbtn.addEventListener("click", onSubmit);

    // const ulElement = document.getElementsByClassName("ticket-info-list");
    const ulElement = document.querySelector('.ticket-info-list');

    const ulConfirm = document.querySelector(".confirm-ticket");

    const mainElement = document.getElementById("main");

    const body = document.getElementById("body");


    function onSubmit(e) {
        //e.preventDefault()
        if (firstNameInput.value == "" ||
            lastNameInput.value == "" ||
            countPeopleInput.value == "" ||
            fromdateInput.value == "" ||
            daysInput.value == "") {
            return
        }
        const liElement = document.createElement("li");
        liElement.className = "ticket";
        //liElement.setAttribute('class', 'ticket');

        const articleElement = document.createElement("article");
        const heading3El = document.createElement("h3");
        heading3El.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`

        const pDate = document.createElement("p");
        pDate.textContent = `From date: ${fromdateInput.value}`

        const pCountDays = document.createElement("p");
        pCountDays.textContent = `For ${daysInput.value} days`

        const pCountPeople = document.createElement("p");
        pCountDays.textContent = `For ${countPeopleInput.value} people`

        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.textContent = "Edit";

        const continueBtn = document.createElement("button");
        continueBtn.className = "continue-btn";
        continueBtn.textContent = "Continue";

        articleElement.appendChild(heading3El);
        articleElement.appendChild(pDate);
        articleElement.appendChild(pCountDays);
        articleElement.appendChild(pCountPeople);

        liElement.appendChild(articleElement);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        ulElement.appendChild(liElement);

        let firstname = firstNameInput.value;
        let lastName = lastNameInput.value;
        let numberPeople = countPeopleInput.value;
        let dateFrom = fromdateInput.value;
        let days = daysInput.value;

        firstNameInput.value = "";
        lastNameInput.value = "";
        countPeopleInput.value = "";
        fromdateInput.value = "";
        daysInput.value = "";

        nextStepsbtn.disabled = true;


        editBtn.addEventListener("click", onEdit);

        function onEdit() {
            firstNameInput.value = firstname;
            lastNameInput.value = lastName;
            countPeopleInput.value = numberPeople;
            fromdateInput.value = dateFrom;
            daysInput.value = days;

            liElement.remove()
            nextStepsbtn.disabled = false;
        }

        continueBtn.addEventListener("click", onContinue);

        function onContinue() {
            const liConfirm = document.createElement("li");
            liConfirm.className = "ticket-content";

            const articleElementContinue = document.createElement("article");
            let h3Conf = document.createElement("h3")
            h3Conf.textContent = `Name: ${firstname} ${lastName}`

            let pFromConf = document.createElement("p");
            pFromConf.textContent = `From date: ${dateFrom}`

            let pdaysConf = document.createElement("p");
            pdaysConf.textContent = `For ${days} days`

            let pcountConf = document.createElement("p");
            pcountConf.textContent = `For ${numberPeople}`

            const btnConfirm = document.createElement("button");
            btnConfirm.className = "confirm-btn";
            btnConfirm.textContent = "Confirm";

            const cancel = document.createElement("button");
            cancel.className = "cancel-btn";
            cancel.textContent = "Cancel";


            liConfirm.appendChild(articleElementContinue);
            articleElementContinue.appendChild(h3Conf);
            articleElementContinue.appendChild(pFromConf);
            articleElementContinue.appendChild(pdaysConf);
            articleElementContinue.appendChild(pcountConf);
            liConfirm.appendChild(btnConfirm);
            liConfirm.appendChild(cancel);
            liElement.remove()

            ulConfirm.appendChild(liConfirm)

            btnConfirm.addEventListener("click", onConfirm)

            function onConfirm() {
                mainElement.remove();
                const message = document.createElement("h1");
                message.setAttribute("id", "thank-you");
                message.textContent = "Thank you, have a nice day!";

                const backBtn = document.createElement("button");
                backBtn.setAttribute("id", "back-btn");
                backBtn.textContent = "Back";

                body.appendChild(message);
                body.appendChild(backBtn);


                backBtn.addEventListener("click", onLoad);

                function onLoad() {
                    location.reload()
                }
            }

            cancel.addEventListener("click", onCancel);

            function onCancel() {
                liConfirm.remove()
                nextStepsbtn.disabled = true;
            }

        }

    }
}









