import React, { useEffect, useState } from 'react';
import axios from "axios"
import { getCharacters } from './api/getCharacters';

function App():JSX.Element {
  
  const [chars, setChars ] = useState<Object[]>([])

  const getData = async () => {
    let data = await getCharacters()
    setChars(data)
  }

  useEffect(()=>{
   getData()
  },[])
  console.log(chars)
  return (
   <div className='flex flex-col justify-center items-center h-screen w-full bg-slate-700'>
      <h1 className='text-4xl font-serif text-white font-semibold'>Personjes</h1>
      <div className='gap-4 grid grid-cols-1 lg:grid-cols-3 px-10 py-4 mt-10 border border-white'>

      </div>
   </div>
  );
}

export default App;
