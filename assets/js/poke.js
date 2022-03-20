const url = "https://pokeapi.co/api/v2/pokemon/80/";

fetch(url).then(response => response.json()).then(data => {
        console.log(data)
        let element = document.getElementById("elem")
        element.innerHTML = `<p>${data.name}</p>
        <p>${data.order}</p>
        <img src="${data.sprites.front_shiny}">
        <img src="${data.sprites.front_default}">
        <p>Exp ${data.base_experience}</p>
        <p>${data.moves[0].move.name}</p>
        <p>${data.types[0].type.name}</p>
        `

    })
    .catch(err => console.log(err))