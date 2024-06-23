import { createContext, useState } from "react";
import useFetch from "../components/UseFetch";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [query, setQuery] = useState("")
  const {data , loading, error} = useFetch(`https://api.themoviedb.org/3/search/movie?query=${query}`)

  return (
    <DataContext.Provider value={{setQuery, data, loading, error}}>
      { children }
    </DataContext.Provider>
  ) 
}

export {DataContext, DataProvider}
