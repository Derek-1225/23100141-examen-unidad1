import '../styles/SearchHistory.css'
import { SearchChip } from './SearchChip.tsx'
import { useSearchBar } from '../hooks/useSearchBar.tsx'

export function SearchHistory() {
  const {tags} = useSearchBar()
  console.log(tags)
  return (
    <section className="search-history" aria-label="Búsquedas realizadas">
      <h2 className="search-history__title">Búsquedas</h2>
      <ul className="search-history__list">
        {tags.map(tag=>(
            <li>
              <SearchChip valor={tag}/>
            </li>
          ))}
        
      </ul>
    </section>
  )
}
