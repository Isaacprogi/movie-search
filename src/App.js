import React from 'react'
import { useEffect } from 'react'
import {useRef} from 'react'
import axios from 'axios'
import './App.css'
import { NavBar } from './components/NavBar'
import { useMovieContext } from './hooks/useMovieContext'
import Home from './pages/Home'

function App() {
  const {setMovies} = useMovieContext()
  const searchRef = useRef('')
  
  
  const API_URL = 'http://www.omdbapi.com?apikey=6bf967b0'
  const searchMovies = async (title) => {
    try {
      const response = await axios.get(`${API_URL}&s=${title}`)
      setMovies(response.data.Search)
    } catch (err) {
      console.log(err)
    }
    
  }
  
  useEffect(() => {
    searchMovies('superman')
    // eslint-disable-next-line
  }, [])

  return (
    <div id='app-scroller' className='app'>
          <NavBar searchRef={searchRef} searchMovies={searchMovies}/>
          <Home/>
     </div>
  )
}

export default App