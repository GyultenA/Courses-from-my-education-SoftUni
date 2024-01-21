
const recipeUrl = "http://localhost:3030/jsonstore/cookbook/recipes"

function loadRecipes() {
    fetch(recipeUrl, {
        method: "GET"
    })
        .then(response => {
            if (response.status !== 200) {
                throw new Error("Wrong status code")
            }
            return response.json()
        })
        .then(data => {
            console.log(data);
            const loader = document.querySelector("#loader");
            loader.style.display = "none";

            Object.values(data).forEach(el => {
                const article = document.createElement("article");
                const h2 = document.createElement("h2");
                h2.textContent = el.name;
                const div = document.createElement("div");
                const divInner = document.createElement("div");
                const img = document.createElement("img");
                img.setAttribute("src", el.img);
                divInner.appendChild(img);
                div.appendChild(divInner);
                article.appendChild(h2);
                article.appendChild(div)

                const main = document.querySelector("#main");
                main.appendChild(article);

                article.addEventListener("click", () => {
                    const urlIngr = "http://localhost:3030/jsonstore/cookbook/details/" + el.id;

                    fetch(urlIngr, {
                        method: "GET"
                    })
                        .then(response => {
                            if (response.status !== 200) {
                                throw new Error("Wrong status")
                            }
                            return response.json()
                        })
                        .then(data => {
                            const innerLoader = document.getElementById("preparation")
                            if(innerLoader){
                                innerLoader.remove()
                            }
                            
                            if(document.getElementById("ingredients")){
                                document.getElementById("ingredients").remove()
                            }
                            console.log(data);

                            const divIngredients = document.createElement("div");
                            divIngredients.id = "ingredients"
                            const h3 = document.createElement("h3");
                            h3.textContent = "Ingredients";

                            const ul = document.createElement("ul");
                            divIngredients.appendChild(h3);
                            divIngredients.appendChild(ul);
                            div.appendChild(divIngredients);

                            Object.values(data).forEach(ingredient => {
                                const li = document.createElement("li");
                                li.textContent = ingredient;
                                ul.appendChild(li)
                            })
                        })
                        .catch((err) => console.log(err));

                        const loading = document.createElement("p");
                        loading.textContent = "Loading...";
                        loader.id = "preparation"

                        const divLoading = document.createElement("div");
                        divLoading.appendChild(loading);
                        div.appendChild(divLoading);
                })

            })

        })
        .catch((err) =>  console.log(err))
}

loadRecipes()