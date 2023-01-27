import React, { useEffect, useState } from 'react';
import axios from "axios"

function App() {
  
  const [pokemons, setPokemons] = useState<Object[]>([])

  useEffect(()=>{

  },[])
console.log(pokemons)
  return (
   <div className='flex flex-col justify-center items-center h-screen w-full bg-slate-700'>
      <h1 className='text-4xl font-serif text-white font-semibold'>Subs</h1>
      <div className='gap-4 grid grid-cols-1 lg:grid-cols-3 px-10 py-4 mt-10 border border-white'>
        {
          pokemons?.map(pokemon => (
            <div className='text-white text-center'>

            </div>
          ))
        }
      </div>
   </div>
  );
}

export default App;
