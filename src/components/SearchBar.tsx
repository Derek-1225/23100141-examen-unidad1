import '../styles/SearchBar.css'
import { useSearchBar } from '../hooks/useSearchBar'
import { useGifExplorer } from '../hooks/useGifExplorer'

export function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const {searchValue,setSearchValue} = useSearchBar()
  const {handleAddTag} = useGifExplorer()
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (searchValue.trim() !== "") {
      onSearch(searchValue)  
      setSearchValue("")
    }
  }

  return (
    <form
      className="search-bar"
      onSubmit={handleSubmit}
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
        <button className="search-bar__button" type="submit">
          Buscar
        </button>
      </div>
    </form>
  )
}
