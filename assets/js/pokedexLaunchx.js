const fetchPokemon = () => {
        const pokename = document.getElementById("pokename");
        let pokeInput = pokename.value.toLowerCase();
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
        fetch(url).then((res) => { // se hace la peticion a la url
            if (res.status != "200") {
                console.log(res);
                pokeImage("./snorlax.webp")
            } else {
                return res.json();
            }

        }).then((data) => {
            console.log(data);
            let pokeimg = data.sprites.front_default;
            console.log(pokeimg)
            pokeImage(pokeimg)
        })
    }
    // es una consulta o peticion a un api

fetchPokemon();
const pokeImage = (url) => {
    const pokeImage = document.getElementById("pokeImg");
    pokeImage.src = url;
}