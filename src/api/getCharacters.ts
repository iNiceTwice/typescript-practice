import axios from "axios"

export const getCharacters = async () => {
    const characters = await axios.get("https://rickandmortyapi.com/api/character")
    
    return characters.data.results
}
