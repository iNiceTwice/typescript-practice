import Search from "./Search";

const Nav: React.FunctionComponent = () => {
  return (
    <>
        <div className="flex justify-between items-center w-5/6 bg-white shadow-lg px-8 py-4 mt-8">
            <div className="text-xl font-semibold">Rick & Morty</div>
            <div>
                <Search/>
            </div>
        </div>
    </>
  )
};

export default Nav;
