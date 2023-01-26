import React, { useEffect, useState } from 'react';

interface Sub {
  nick:string,
  subMonths:number,
  avatar:string,
  description?:string
}

const initial_state = [
    {
      nick:"dapelu",
      subMonths:4,
      avatar:"https://i.pravatar.cc/150?u=dapelu",
      description:"dapelu es buena onda"
    },
    {
      nick:"midu",
      subMonths:4,
      avatar:"https://i.pravatar.cc/150?u=midudev"
    },
    {
      nick:"Marc",
      subMonths:4,
      avatar:"https://i.pravatar.cc/150?u=marc"
    }
  ]

function App() {
  
  const [subs, setSubs] = useState<Sub[]>([])

  useEffect(()=>{
    setSubs(initial_state)
  },[])

  return (
   <div className='flex flex-col justify-center items-center h-screen w-full bg-slate-700'>
      <h1 className='text-4xl font-serif text-white font-semibold'>Subs</h1>
      <div className='gap-4 grid grid-cols-1 lg:grid-cols-3 px-10 py-4 mt-10 border border-white'>
        {
          subs.map(sub=>(
            <div className='text-white text-center'>
              <img alt="img" src={sub.avatar} />
              <h3>{sub.nick}</h3>
            </div>
          ))
        }
      </div>
   </div>
  );
}

export default App;
