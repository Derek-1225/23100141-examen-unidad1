import '../styles/GifGrid.css'
import { GifCard } from './GifCard.tsx'
import { useGifs } from '../hooks/useGifs.tsx'

export function GifGrid() {
  const {gifs} = useGifs()
  return (
    <ul className="gif-grid">
      {/* {gifs.map(gif => (
            <li>
                <GifCard Gif={gif}></GifCard>
            </li>
      ))} */}
    </ul>
  )
}
