import { Character } from "../types";

const CharacterItem = ({ id, name, gender, image, status }:Character):JSX.Element => {
    return ( 
        <>
            <div className="h-full p-4 rounded-lg bg-white flex gap-x-6">
                <div className="h-full flex items-center">
                    <img alt={name} className="rounded-full shadow-md" src={ image } width={100}/>
                </div>
                <div className="w-full">
                    <div className="flex items-center">
                        <h3 className="text-xl font-semibold">{ name }</h3>
                        { status === "Alive" ? <span className="p-1 bg-green-600 rounded-full ml-4 h-fit"></span> : null }
                        { status === "Dead" ? <span className="p-1 bg-red-600 rounded-full ml-4 h-fit"></span> : null }
                        { status === "unknown" ? <span className="p-1 bg-gray-600 rounded-full ml-4 h-fit"></span> : null }
                    </div>
                    <div>
                        { gender }
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default CharacterItem;