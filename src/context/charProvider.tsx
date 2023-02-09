import { useEffect, useState } from "react"
import { CharacterContext } from "./charContext"
import { State } from "../types";
import axios from "axios"

interface Props {
     children: JSX.Element | JSX.Element[];
}

const initialState:State = {
    characters:[],
    currentPage:1,
    pages:null
}

export const CharacterProvider = ({children}:Props) => {
    
    const API = "https://rickandmortyapi.com/api/character"
    const [ state, setState ] = useState<State>(initialState)

    const getCharacters = async ():Promise<void> => {
        const characters = await axios.get(API)
        setState({...state, characters: characters.data.results})
    }

    const getCharactersByQuery = async (query:string):Promise<void> => {
        const characters = await axios.get(`${API}/?name=${query}&page=${state.currentPage}`)
        setState({...state, characters: characters.data.results})
    }
    
    useEffect(()=>{
       getCharacters()
       // eslint-disable-next-line
    },[])

    return (
        <CharacterContext.Provider
            value={{
                state,
                setState,
                getCharactersByQuery
            }}
        >
            { children }
        </CharacterContext.Provider>
    )
}