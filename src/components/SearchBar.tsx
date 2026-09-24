import '../styles/SearchBar.css'
import { useSearchBar } from '../hooks/useSearchBar'

export function SearchBar() {
  const {searchValue,setSearchValue,handleAddTag} = useSearchBar()
  return (
    <form
      className="search-bar"
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <label className="search-bar__label" htmlFor="gif-search">
        Buscar GIFs
      </label>
      <div className="search-bar__controls">
        <input
          id="gif-search"
          className="search-bar__input"
          type="search"
          name="query"
          defaultValue="cats"
          placeholder="Escribe un término, por ejemplo: cats"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="search-bar__button" type="submit" onClick={handleAddTag}>
          Buscar
        </button>
      </div>
    </form>
  )
}
