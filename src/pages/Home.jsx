import { useMovieContext } from '../hooks/useMovieContext'
import { MovieCard } from '../components/MovieCard'
import { v4 as uuid } from 'uuid'

const Home = () => {
    const{movies} = useMovieContext()
    return <div className={movies?.length > 0?"container":'no-movie'}>
    { 
      movies?.length > 0?(
         movies?.map((movie)=>{
           return <MovieCard  key={uuid()} movie={movie}/>
         })
      ):(
        <div className='no-movie-text'>No movie</div>
      )
    }
 </div>
}

export default Home