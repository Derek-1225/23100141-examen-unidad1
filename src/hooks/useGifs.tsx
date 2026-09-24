import { useState,useEffect } from "react"
import { getGifsAsync } from "../services/GiphyService"
import { type Datum } from "../types/GiphyType"
export const useGifs = () => {
    const[gifs,setGifs] = useState<Datum[]>([])
    const [hasError,setHasError] = useState(false)
    useEffect(()=>{
            const getGifs = async ()=>{
                setHasError(false)
                try {
                    const gifsResponse = await getGifsAsync('cats')
                    setGifs(gifsResponse)
                } catch (error) {
                    setHasError(true)
                    console.error(error)
                } 
            }
            void getGifs()
    },[])

    return{
        gifs,
        hasError
    }
}
