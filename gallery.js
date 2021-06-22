////===========INIT=================

const api = new XMLHttpRequest();
const $container = document.getElementById("contenedor");


api.addEventListener("readystatechange", (e) => {
    if (api.readyState !== 4) {
        return
    }
    if (api.status >= 200 && api.status < 300) {
        let json = JSON.parse(api.responseText);

        for (let i = 0; i < 12; i++) {
            const element = json[i];
            //console.log(element)
            let urlImage = element['thumbnailUrl'];
            let id = element['id'];
            let title = element['title'];
            let album = element['albumId'];
            //console.log(urlImage)

            $container.innerHTML += `<div class="image">
                <img src="${urlImage}">
                <p>ID: ${id}</p>
                <p>Album: ${album}</p>
            </div>`;
        }


    }
})

api.open("GET", "https://jsonplaceholder.typicode.com/photos");
api.send()