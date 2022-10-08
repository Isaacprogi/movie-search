import React from 'react'

export const MovieCard = ({movie}) => {
    return (
        <div className="movie">
            <div className='year'>
                <p>{movie.Year}</p>
            </div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.pplaceholder.com/400'} alt={movie.Title} />
            <div className='title'>
                <span>{movie.Type}</span>
                <span>{movie.Title}</span>
            </div>
        </div>
    )
}