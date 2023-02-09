import { useContext } from 'react';
import { CharacterContext } from '../context/charContext';
import { Link } from "react-router-dom"
import CharacterItem from '../components/CharacterItem';
import Nav from '../components/Nav';
import Pagination from '../components/Pagination';


const App: React.FunctionComponent = () => {

    const { state } = useContext(CharacterContext)
    console.log(state.characters)

    return (
        <div className='flex flex-col justify-center items-center h-full w-full bg-slate-700'>
            <Nav/>
            <div className='gap-4 grid grid-cols-1 lg:grid-cols-3 py-4 mt-10 w-5/6'>
                {
                    state.characters?.map((char) => (
                        <Link to="/" className="cursor-pointer" key={char.id}>
                        <CharacterItem
                            id={char.id}
                            name={char.name}
                            gender={char.gender}
                            status={char.status}
                            image={char.image}
                            url={char.url}
                        />
                        </Link>
                    ))
                }
            </div>
            <Pagination/>
        </div>
    )
};

export default App;


