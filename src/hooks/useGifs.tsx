import { useState,useEffect } from "react"
import { getGifsAsync } from "../services/GiphyService"
import { type Giphy } from "../types/GiphyType"
export const useGifs = (query:string) => {
    const[gifs,setGifs] = useState<Giphy[]>([])
    const [hasError,setHasError] = useState(false)
    const[count,setCount] = useState(0)
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

    useEffect(() => {
        const suma = gifs.reduce((acc) => acc + 1, 0);
        setCount(suma);
    }, [gifs]);

    return{
        gifs,
        hasError,
        count
    }
}
