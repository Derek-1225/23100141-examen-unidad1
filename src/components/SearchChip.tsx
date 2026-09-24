import '../styles/SearchChip.css'

interface SearchChipProps {
  valor: string
}

export function SearchChip({valor}:SearchChipProps) {
  return (
    <>
        <button className="search-chip search-chip--active" type="button" aria-current="true">
          {valor}
        </button>
      
    </>
  )
}
