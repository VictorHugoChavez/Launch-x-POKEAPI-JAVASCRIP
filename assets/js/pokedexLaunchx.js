const fetchPokemon = () => {
        const pokename = document.getElementById("pokename");
        let pokeInput = pokename.value.toLowerCase();
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
        fetch(url).then((res) => { // se hace la peticion a la url
            if (res.status == 404) {
                alert('Este pokemon no esta disponible, ingrese o correctamnete el nombre ')
            } else {
                const pokemon = res.json();
                return pokemon
            }
            document.getElementById('nombre_pokemon').innerHTML = pokemon.name;
        }).then((data) => {
            let element = document.getElementById("element");
            element.innerHTML = `
            <div class="d-flex">
                <div class="container">
                    <div class="d-flex">
                        <img width="100" class="col-1" src="${data.sprites.front_default}">
                        <img width="100" class="col-1" src="${data.sprites.front_shiny}">
                    </div>
                    <p>${data.types[0].type.name}</p>
                    <p>${data.name} Exp ${data.base_experience}</p>
                    <div class="container"> 
                        <div class="row">
                            <p class="col-2">${data.moves[0].move.name}</p>
                            <p class="col-2">${data.moves[5].move.name} </p>
                        </div>
                        <div class="row">
                            <p class="col-2">${data.moves[10].move.name}</p>
                            <p class="col-2">${data.moves[15].move.name} </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>${data.stats[0].stat.name} ${data.stats[0].base_stat}</p>
                </div>
            </div>
            `
            console.log(data);
        })
    }
    // es una consulta o peticion a un api