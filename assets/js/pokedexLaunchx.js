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
            let imagenes = document.getElementById("imagenes");
            let nombre = document.getElementById("nombre");

            nombre.innerHTML = `
                    <h1 class="texto-type justify-content-center text-center text-uppercase mt-5">TYPE : ${data.types[0].type.name}</h1>
                    <div class="d-flex mt-4">
                        <h5 class="col-6 justify-content-center text-center text-uppercase">Nombre :  ${data.name}</h5>
                        <h5 class="col-6 justify-content-center text-center text-uppercase">Experiencia :  ${data.base_experience}</h5>
                    </div>
                    <h5 class="imagen mt-5 row justify-content-center text-center text-uppercase">MOVIMIENTOS</h5>
                    <div class="mt-5 row justify-content-center">
                        <div class="container fondo-mov"> 
                            <div class="row co">
                                <p class="border1 col-4 justify-content-center text-center">${data.moves[0].move.name}</p>
                                <p class="border2 col-4 justify-content-center text-center">${data.moves[5].move.name} </p>
                                <p class="border3 col-4 justify-content-center text-center">${data.moves[10].move.name}</p>
                             </div>
                            <div class="row">
                                <p class="border3 col-4 justify-content-center text-center">${data.moves[15].move.name}</p>
                                <p class="border1 col-4 justify-content-center text-center">${data.moves[20].move.name} </p>
                                <p class="border2 col-4 justify-content-center text-center">${data.moves[25].move.name} </p>
                            </div>
                            <div class="row">
                                <p class="border2 col-4 justify-content-center text-center">${data.moves[30].move.name}</p>
                                <p class="border3 col-4 justify-content-center text-center">${data.moves[35].move.name} </p>
                                <p class="border1 col-4 justify-content-center text-center">${data.moves[40].move.name} </p>
                            </div>
                            <div class="row">
                                <p class="border1 col-4 justify-content-center text-center">${data.moves[45].move.name}</p>
                                <p class="border2 col-4 justify-content-center text-center">${data.moves[50].move.name} </p>
                                <p class="border3 col-4 justify-content-center text-center">${data.moves[55].move.name} </p>
                            </div>
                        </div>
                    </div>
                    <h5 class="imagen mt-5 row justify-content-center text-center text-uppercase">estadisticas</h5>
                    <div class="mt-5 row justify-content-center">
                        <div class="container">
                            <div class="row">
                                <p class="hp col-3 justify-content-center text-center ">HP</p>
                                <p class="valores col-3 justify-content-center text-center">${data.stats[0].base_stat}</p>
                                <p class="attack col-3 justify-content-center text-center">ATTACK</p>
                                <p class="valores col-3 justify-content-center text-center">${data.stats[1].base_stat}</p>
                            </div>
                            <div class="row">
                                <p class="defense col-3 justify-content-center text-center">DEFENSE</p>
                                <p class="valores col-3 justify-content-center text-center">${data.stats[2].base_stat}</p>
                                <p class="special-attack col-3 justify-content-center text-center">SPECIAL-ATTACK</p>
                                <p class="valores col-3 justify-content-center text-center">${data.stats[3].base_stat}</p>
                            </div>
                            <div class="row">
                                <p class="special-defense col-3 justify-content-center text-center">SPECIAL-DEFENSE</p>
                                <p class="valores col-3 justify-content-center text-center">${data.stats[4].base_stat}</p>
                                <p class="speed col-3 justify-content-center text-center">SPEED</p>
                                <p class="valores col-3 justify-content-center text-center">${data.stats[5].base_stat}</p>
                            </div>
                        </div>
                    </div>


            `
            imagenes.innerHTML = `
                <div class="imagen row justify-content-center m-auto">DEFAULT</div>
                <img class="row text-center m-auto" style="width: 180px" class="col-1" src="${data.sprites.front_default}">
                <img class="row text-center m-auto" style="width: 180px"" class="col-1" src="${data.sprites.back_default}">
                <div class="imagen row justify-content-center m-auto">SHINY</div>
                <img class="row text-center m-auto" style="width: 180px" class="col-1" src="${data.sprites.front_shiny}">
                <img class="row m-auto" style="width: 180px" class="col-1" src="${data.sprites.back_shiny}">
            `
            console.log(data);
        })
    }
    // es una consulta o peticion a un api