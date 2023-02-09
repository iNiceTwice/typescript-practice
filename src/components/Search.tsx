import { useState, useEffect, useContext } from "react"
import { CharacterContext } from "../context/charContext";
import useDebounce from "../hooks/useDebounce"

const Search = () => {
  
  const [ query, setQuery ] = useState<string>("")
  const { getCharactersByQuery } = useContext(CharacterContext)
  const debounceSearch = useDebounce(query, 400)

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  useEffect(()=>{
    getCharactersByQuery(debounceSearch)
    // eslint-disable-next-line
  },[debounceSearch])

  return (
    <>
      <input onChange={ handleChange } className="py-2 px-4 outline-none rounded-md border" placeholder="Search"/>
    </>
  )
};

export default Search;