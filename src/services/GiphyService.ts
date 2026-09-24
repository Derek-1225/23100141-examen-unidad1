import { type Datum } from "../types/GiphyType"
export const getGifsAsync = async (query:string):Promise<Datum[]> => {
    const apiKey = "CYH7f2epdX5sTYe49OqY01j4pjvDDv1m"

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}`

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Fallo en la api.')
    }
    const gifsData:Datum[] = await response.json();
    return gifsData
}