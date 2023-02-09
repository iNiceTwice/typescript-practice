import { useContext } from "react";
import { CharacterContext } from "../context/charContext";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2"


const Pagination = () => {

    const { state, setState } = useContext(CharacterContext)

    const handleNextPage = ():void => {
        state.currentPage < state.pages && 
        setState(prevState => ({...prevState, currentPage: prevState.currentPage + 1 }))
    }
    const handlePreviousPage = ():void => {
        state.currentPage > 1 && 
        setState(prevState => ({...prevState, currentPage: prevState.currentPage - 1 }))
    }

    return ( 
        <>
            <div className="flex w-full lg:w-5/6 bg-slate-50 rounded-md justify-center mb-6 py-2">
                <div className="flex items-center gap-x-4">
                    <button className="hover:bg-sky-100 mx-1 px-1" onClick={() => handlePreviousPage() }>
                        <HiChevronLeft size={25}/>
                    </button>
                    <span>{ state.currentPage } / { state.pages }</span>
                    <button className="hover:bg-sky-100 mx-1 px-1" onClick={() => handleNextPage() }>
                        <HiChevronRight size={25}/>
                    </button>
                </div>
            </div>
        </>
     );
}
 
export default Pagination;