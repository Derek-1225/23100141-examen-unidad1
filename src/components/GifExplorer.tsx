import { useSearchBar } from '../hooks/useSearchBar.tsx'
import { useGifExplorer } from '../hooks/useGifExplorer.tsx'
import { useGifs } from '../hooks/useGifs.tsx'
import '../styles/GifExplorer.css'
import { GifGrid } from './GifGrid.tsx'
import { SearchBar } from './SearchBar.tsx'
import { SearchHistory } from './SearchHistory.tsx'

export function GifExplorer() {
  const {searchValue,queries} = useSearchBar()
  const {query,setQuery,handleSearch,handleAddTag} = useGifExplorer()
  const {count} = useGifs(query)
  console.log(searchValue)
  return (
    <main className="gif-explorer">
      <header className="gif-explorer__header">
        <p className="gif-explorer__kicker">Giphy</p>
        <h1>Buscador de GIFs</h1>
        <p className="gif-explorer__subtitle">
          Escribe un término, revisa los resultados y conserva cada búsqueda.
        </p>
      </header>

      <SearchBar onSearch={setQuery} />
      <SearchHistory queries={queries} onSelect={handleSearch} />
      <section className="gif-explorer__results" aria-label="Resultados">
        <div className="gif-explorer__results-header">
          <h2>Resultados para {query}</h2>
          <p> {count} GIFs</p>
        </div>
                
        <div>
          <GifGrid query={query}/>
        </div>
      </section>
    </main>
  )
}
