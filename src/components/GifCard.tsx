import '../styles/GifCard.css'
import type { Datum } from '../types/GiphyType'

interface GifCardProps{
  Gif:Datum
}

export function GifCard({Gif}:GifCardProps) {
  return (
    <article className="gif-card">
      <img
        className="gif-card__image"
        src={Gif.source}
        alt={Gif.alt_text}
      />
      <div className="gif-card__body">
        <h3 className="gif-card__title">{Gif.title}</h3>
        <p className="gif-card__username">{Gif.username}</p>
      </div>
    </article>
  )
}
