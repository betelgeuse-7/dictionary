import SearchIcon from "./SearchIcon"

const SearchBar = ({ setNewWord }) => {
    return (
        <>
            <input
                type="search"
                id="search-bar"
                onChange={e => setNewWord(e.target.value)}
                placeholder="Search for a word..."
            />
            <SearchIcon />
        </>
    )
}

export default SearchBar
