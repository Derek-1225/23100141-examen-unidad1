// useSearchBar.tsx
import { useState } from "react"

export const useSearchBar = () => {
  const [searchValue, setSearchValue] = useState("")
  const [queries, setQueries] = useState<string[]>(["cats"])

  
  
  return {
    searchValue,
    setSearchValue,
    queries,
    setQueries
  }
}