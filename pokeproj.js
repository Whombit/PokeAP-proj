function getPokemon() {
    randompokemon();
    }

    function randompokemon() {
        const pokemonId = Math.floor(Math.random() * 898) + 1;
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(data => {
        const pokemonName = data.name;
        const pokemonImage = data.sprites.front_default;
       document.querySelector('#pokemon').textContent = `Pokemon: ${pokemonName}`;
       document.querySelector('#pokemon-image').src = pokemonImage;
})
.catch(error => console.error(error));
}