import { useState,useEffect } from "react"
import { getGifsAsync } from "../services/GiphyService"
import { type Giphy } from "../types/GiphyType"
export const useGifs = (query:string) => {
    const[gifs,setGifs] = useState<Giphy[]>([])
    const [hasError,setHasError] = useState(false)
    useEffect(()=>{
            const getGifs = async ()=>{
                setHasError(false)
                try {
                    const gifsResponse = await getGifsAsync(query)
                    setGifs(gifsResponse)
                    console.log(gifsResponse)
                } catch (error) {
                    setHasError(true)
                } 
            }
            void getGifs()
    },[query])

    return{
        gifs,
        hasError
    }
}
