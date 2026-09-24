import '../styles/GifExplorer.css'
import { GifGrid } from './GifGrid.tsx'
import { SearchBar } from './SearchBar.tsx'
import { SearchHistory } from './SearchHistory.tsx'

export function GifExplorer() {
  return (
    <main className="gif-explorer">
      <header className="gif-explorer__header">
        <p className="gif-explorer__kicker">Giphy</p>
        <h1>Buscador de GIFs</h1>
        <p className="gif-explorer__subtitle">
          Escribe un término, revisa los resultados y conserva cada búsqueda.
        </p>
      </header>

      <SearchBar />
      <SearchHistory />

      <section className="gif-explorer__results" aria-label="Resultados">
        <div className="gif-explorer__results-header">
          <h2>Resultados para «cats»</h2>
          <p> GIFs</p>
        </div>
        
        <div>
          {/* <GifGrid/> */}
        </div>
      </section>
    </main>
  )
}
