import { useState } from "react"

export const useGifExplorer = () => {
    const [query, setQuery] = useState("cats")
    return {query,setQuery}
}
