import { useState } from "react"

export const useSearchBar = () => {
    const [searchValue,setSearchValue] = useState("")
    const [tags,setTags] = useState<string[]>([])
    
    const handleAddTag = () =>{
        const newTag = searchValue
        setTags([...tags,newTag])
        setSearchValue("")
    }

    return{
        searchValue,setSearchValue,handleAddTag,tags
    }
    
}
