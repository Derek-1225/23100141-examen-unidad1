import { type Giphy } from "../types/GiphyType"

export const getGifsAsync = async (query: string): Promise<Giphy[]> => {
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error("Fallo en la api.")
  }

  const json = await response.json()

  // Adaptar la respuesta de la API a tu interfaz Giphy
  return json.data.map((gif: any) => ({
    id: gif.id,
    embed_url: gif.embed_url,
    username: gif.username,
    source: gif.source,
    title: gif.title,
    image_url: gif.images.original.url
  }))
}