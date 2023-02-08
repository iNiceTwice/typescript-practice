interface IAppProps {
}

const Search: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
        <input className="py-2 px-4 outline-none rounded-md border" placeholder="Search"/>
    </>
  )
};

export default Search;