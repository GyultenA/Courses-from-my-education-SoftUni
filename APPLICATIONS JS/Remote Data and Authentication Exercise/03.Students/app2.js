function students(){
    //console.log('TODO...');
const url = "http://localhost:3030/jsonstore/collections/students";
const resultsTable = document.getElementById('results').querySelector('tbody');
const formElement = document.querySelector('form');

window.addEventListener('load', addStudents);

formElement.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    let firstName = formData.get("firstName");
    let lastName = formData.get("lastName");
    let facultyNumber = formData.get("facultyNumber");
    let grade = Number(formData.get("grade"));

    //check if all input fields are correct
    if (!firstName || !lastName || !Number(facultyNumber) || !Number(grade)) {
        return alert('Invalid input.')
    }
    // create new student
    let studentObj = {
        firstName,
        lastName,
        facultyNumber,
        grade
    }
    await fetch(url, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(studentObj)
    });
    formElement.reset();
    window.location.reload();
})
//get data for student records and render them in the tbody element
    function addStudents(){
        fetch(url)
        .then(res => res.json())
        .then(data => {
            for (let student of Object.values(data)){
                let trElement = document.createElement("tr");
                let firstNameEl = document.createElement("td");
                firstNameEl.textContent = student.firstName;
                trElement.appendChild(firstNameEl);

                let lastElement = document.createElement("td");
                lastElement.textContent = student.lastName;
                trElement.appendChild(lastElement);

                let facultNumberEl = document.createElement("td");
                facultNumberEl.textContent = student.facultyNumber;
                trElement.appendChild(facultNumberEl);

                let gradeElement = document.createElement(td);
                gradeElement.textContent = student.grade;
                trElement.appendChild(gradeElement);

                resultsTable.appendChild(trElement);

            }
        }).catch(err => console.log("error"))
    }
}
