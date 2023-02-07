import React, { useEffect, useState } from 'react';
import { Character } from './types';
import { getCharacters } from './api/getCharacters';
import CharacterItem from './components/CharacterItem';
import Nav from './components/Nav';

function App():JSX.Element {  
  const [chars, setChars ] = useState<Character[]>([])

  const getData = async ():Promise<void> => {
    let data = await getCharacters()
    setChars(data)
  }

  useEffect(()=>{
   getData()
  },[])

  console.log(chars)
  return (
   <div className='flex flex-col justify-center items-center h-full w-full bg-slate-700'>
      <Nav/>
      <div className='gap-4 grid grid-cols-1 lg:grid-cols-3 px-10 py-4 mt-10 w-9/12'>
        {
          chars?.map((char) => (
            <div key={char.id}>
              <CharacterItem
                id={char.id}
                name={char.name}
                gender={char.gender}
                status={char.status}
                image={char.image}
             />
            </div>
          ))
        }
      </div>
   </div>
  );
}

export default App;
