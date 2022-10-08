import { useState } from "react";
import { createContext} from "react";


export const MovieContext = createContext()

const MovieProvider = ({children}) =>{
  const [movies, setMovies] = useState('')

    return <MovieContext.Provider value={{
        movies,setMovies
    }}>
        {children}
    </MovieContext.Provider>
}

export default MovieProvider
