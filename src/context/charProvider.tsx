import { useCallback, useEffect, useState } from "react"
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

    const getCharacters = useCallback(async ():Promise<void> => {
        const characters = await axios.get(API)
        setState({...state, characters: characters.data.results})
    },[state])
    
    useEffect(()=>{
       getCharacters()
       // eslint-disable-next-line
    },[])

    return (
        <CharacterContext.Provider
            value={{
                state,
                setState  
            }}
        >
            { children }
        </CharacterContext.Provider>
    )
}