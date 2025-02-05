const TOTAL_POKEMONS = 151;
const TOTAL_PAGES = 10;
(async () => {
    const fs = require('fs');
    const pokemonIDs = Array.from({ length: TOTAL_POKEMONS }, (_, i) => i + 1);
    const pokemonPage = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);
    let routes = "";
    const routesPokemonByID = pokemonIDs
        .map(id => `/pokemon/${id}`)
        .join('\n');
    const pagesPokemon = pokemonPage
        .map(page => `/pokemons/page/${page}`)
        .join("\n");

    /// Write the routes to the file by name
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`)
    const data = await resp.json();
    const pokemons = data.results.map(pokemon => pokemon.name);
    const routesPokemonByName = pokemons.map(pokemon => `/pokemon/${pokemon}`)
        .join('\n');

    routes = routes.concat(routesPokemonByID)
        .concat('\n', pagesPokemon)
        .concat('\n', routesPokemonByName);

    fs.writeFileSync('routes.txt', routes);
    console.log('Routes generated');
})();