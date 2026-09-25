import '../styles/GifCard.css'
import type { Giphy } from '../types/GiphyType'

interface GifCardProps{
  gif:Giphy
}

export function GifCard({gif}:GifCardProps) {
  return (
    <article className="gif-card">
      <img
        className="gif-card__image"
        src={gif.image_url}
        alt={gif.title}
      />
      <div className="gif-card__body">
        <h3 className="gif-card__title">{gif.title}</h3>
        <p className="gif-card__username">{gif.username}</p>
      </div>
    </article>
  )
}
