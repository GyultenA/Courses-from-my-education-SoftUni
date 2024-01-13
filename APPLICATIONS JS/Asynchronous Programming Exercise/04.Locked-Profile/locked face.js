async function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
 
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = '';
 
    const profilesData = await getProfilesData();
 
    appendProfilesToMainElement();
 
    async function getProfilesData() {
        const profilesDataResponse = await fetch(url);
        return await profilesDataResponse.json();
    }
 
    function appendProfilesToMainElement() {
        Object.values(profilesData)
            .forEach((v, i) => {
                const profileDivElement = document.createElement('div');
                profileDivElement.classList.add('profile');
                profileDivElement.innerHTML = createDivElementInnerHTML(v, i + 1);
 
                const buttonElement = document.createElement('button');
                buttonElement.textContent = "Show more";
                buttonElement.addEventListener('click', showOrHide);
 
                profileDivElement.appendChild(buttonElement);
                mainElement.appendChild(profileDivElement);
            });
    }
 
    function createDivElementInnerHTML(profile, id) {
        return `<img src="./iconProfile2.png" class="userIcon" />
<label>Lock</label>
<input type="radio" name="user${id}Locked" value="lock" checked>
<label>Unlock</label>
<input type="radio" name="user${id}Locked" value="unlock"><br>
<hr>
<label>Username</label>
<input type="text" name="user${id}Username" value=${profile.username} disabled readonly />
<div class="user${id}Username" style="display:none">
<hr>
<label>Email:</label>
<input type="email" name="user${id}Email" value=${profile.email} disabled readonly />
<label>Age:</label>
<input type="text" name="user${id}Age" value=${profile.age} disabled readonly />
</div>`;
    }
 
    function showOrHide(evant) {
        const target = evant.target;
        const parent = target.parentElement;
 
        if (parent.querySelector('input[value="lock"]').checked) {
            return;
        }
 
        const usernameDivElement = parent.querySelector('div');
 
        if (target.textContent === 'Show more') {
            usernameDivElement.style.display = 'block';
            target.textContent = 'Hide it'
        } else {
            usernameDivElement.style.display = 'none';
            target.textContent = 'Show more'
        }
    }
}