import React, { useEffect, useContext } from 'react';
import { CharacterContext } from './context/charContext';
import CharacterItem from './components/CharacterItem';
import Nav from './components/Nav';
import Pagination from './components/Pagination';

function App():JSX.Element {  
  const { state } = useContext(CharacterContext)

  return (
   <div className='flex flex-col justify-center items-center h-full w-full bg-slate-700'>
      <Nav/>
      <div className='gap-4 grid grid-cols-1 lg:grid-cols-3 px-10 py-4 mt-10 w-5/6'>
        {
          state.characters?.map((char) => (
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
      <Pagination/>
   </div>
  );
}

export default App;
