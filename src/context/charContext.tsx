import { createContext } from "react";
import { State } from "../types";

interface CharCtx {
    state:State,
    setState:React.Dispatch<React.SetStateAction<State>>
}

export const CharacterContext = createContext<CharCtx>({} as  CharCtx)

