import { createContext } from "react";
import { State } from "../types";

interface CharCtx {
    state:State,
    setState:React.Dispatch<React.SetStateAction<State>>,
    getCharactersByQuery: (query:string) => void
}

export const CharacterContext = createContext<CharCtx>({} as  CharCtx)

