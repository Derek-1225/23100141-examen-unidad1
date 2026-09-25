import { useState } from "react"

export const useGifExplorer = () => {
    const [query, setQuery] = useState("")
    const [tags, setTags] = useState<string[]>([""])
    const handleSearch = (newQuery: string) => {
        setQuery(newQuery)
        setTags(prev => [...prev, newQuery])
    }

    const handleAddTag = (event: React.FormEvent) => {
        event.preventDefault
        const newTag = query
        setTags([...tags, newTag])
        setQuery("")
  }
    
  

    return {query,setQuery,handleSearch,tags,handleAddTag}
}
