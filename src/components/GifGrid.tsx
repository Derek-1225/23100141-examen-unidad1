import '../styles/GifGrid.css'
import { GifCard } from './GifCard.tsx'
import { useGifs } from '../hooks/useGifs.tsx'

interface gifExplorerProps{
  query:string
}

export function GifGrid({query}:gifExplorerProps) {
  const {gifs} = useGifs(query)
  console.log(gifs)
  return (
    <ul className="gif-grid">
      {gifs.map(gif => (
          <li>
              <GifCard gif={gif}/>
          </li>
      ))}
    </ul>
  )
}
