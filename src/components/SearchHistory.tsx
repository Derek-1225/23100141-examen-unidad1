import '../styles/SearchHistory.css'
import { SearchChip } from './SearchChip.tsx'
import { useGifExplorer } from '../hooks/useGifExplorer.tsx'

interface SearchHistoryProps {
  queries: string[]
  onSelect: (query: string) => void
}

export function SearchHistory({ queries, onSelect }: SearchHistoryProps) {
  const {tags} = useGifExplorer()
  return (
    <section className="search-history" aria-label="Búsquedas realizadas">
      <h2 className="search-history__title">Búsquedas</h2>
      <ul className="search-history__list">
        {tags.map((tag, index) => (
          <SearchChip key={index} valor={tag} onClick={onSelect} />
        ))}
      </ul>
    </section>
  )
}
