import axios from "axios"

interface Pokedex {
    url:string
}
interface Pokemon {
    pokemonData : object
}

export const getPokemons = ():Object[] => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then((data) => {
        let pokemonList:Pokedex[] = data.data.results
        pokemonList.map(pokemon => getPokemon(pokemon.url))
      })
      .catch(error => console.log(error))    
    return []
}

export const getPokemon = async (url:string):Promise<Object> => {
    const pokemonData = await axios.get(url)

    return pokemonData.data
    
}