import '../styles/SearchChip.css'

interface SearchChipProps {
    valor: string
    onClick?: (valor: string) => void
}

export function SearchChip({valor,onClick}:SearchChipProps) {
  return (
    <>
        <button
          className="search-chip search-chip--active"
          type="button"
          onClick={() => onClick?.(valor)}
        >
          {valor}
        </button>
    </>
  )
}
