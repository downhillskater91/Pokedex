export const getAllPokemonAsync = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=-1');
  const results = await response.json();
  let pokemon = results.results;

  // Add the front-default sprite url to the response result
  pokemon.map(result => {
    const url_split = result.url.split('/');
    const id = url_split[url_split.length - 2];

    result.name = result.name.charAt(0).toUpperCase() + result.name.slice(1);
    result.id = id;
    result.sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  });

  return pokemon;
}