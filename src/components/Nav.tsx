
interface IAppProps {
}

const Nav: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
        <div className="flex justify-between items-center w-5/6 bg-white shadow-lg px-8 py-4 mt-8">
            <div className="text-xl font-semibold">Rick & Morty</div>
            <div>
                <input className="py-2 px-4 outline-none rounded-md border" placeholder="Search"></input>
            </div>
        </div>
    </>
  )
};

export default Nav;
