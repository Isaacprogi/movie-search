import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useEffect,useState } from 'react'



export const NavBar = ({searchRef,searchMovies}) => {
    const[active,setActive] = useState(false)


    useEffect(()=>{
        const handleResize = () =>{
            if(window.scrollY>=10){
              setActive(true)
            }
            else{
              setActive(false)
            }
        }
        window.addEventListener('scroll', handleResize)
        handleResize();
        return () =>window.removeEventListener('scroll', handleResize)
    },[])
  return (
      <>
      <div className="nav">
    <div className="nav-container">
      <span className='logo'>Bill' Movie</span>
    </div>
  </div>
  <div className="search-space">
    <div className={active?"search-container active":"search-container"}>
    <div className="search">
      <input ref={searchRef}  type="text" placeholder='search for movies..' />
      <FaSearch className='search-icon' onClick={()=>searchMovies(searchRef.current.value)}/>
    </div>
    </div>
  </div>
      </>
    
  )
}
