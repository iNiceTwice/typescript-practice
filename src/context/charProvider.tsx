import { useState, useEffect } from "react"
import { CharacterContext } from "./charContext"
import { State } from "../types";
import axios from "axios"

interface Props {
     children: JSX.Element | JSX.Element[];
}

const initialState:State = {
    characters:[],
    currentPage:1,
    pages:1
}

export const CharacterProvider = ({children}:Props) => {
    
    const API = "https://rickandmortyapi.com/api/character"
    const [ state, setState ] = useState<State>(initialState)

    const getCharacters = async (query:string):Promise<void> => {
        const characters = await axios.get(`${API}/?name=${query}&page=${state.currentPage}`)
        setState({...state, characters: characters.data.results, pages:characters.data.info.pages})
    }

    useEffect(()=>{
        getCharacters("")
    },[])

    return (
        <CharacterContext.Provider
            value={{
                state,
                setState,
                getCharacters
            }}
        >
            { children }
        </CharacterContext.Provider>
    )
}