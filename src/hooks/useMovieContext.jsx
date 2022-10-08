import {useContext} from 'react'
import { MovieContext } from '../context/MovieContext'


 export const useMovieContext = () => {
    const context = useContext(MovieContext)
    if(!context) {
        return console.log('You cannot use UserContext outside UserProvider')
    }
    return context
}