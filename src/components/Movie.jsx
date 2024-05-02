import React from  'react'
import Hover from './Hover'



const IMG_BASE_URL = `https://image.tmdb.org/t/p/w500/`


export default function Movie({title,poster_path, vote_average, movie_id, overview}){
  
  return (
    <div className='movie-container'>
          <img src={IMG_BASE_URL+ poster_path} alt="영화포스터" />  
          <div className='movie-info'>
              <h4>{title}</h4>
              <span>{vote_average}</span>
              <div className="image-description">
                  <p>영화 설명</p>
                  <Hover />
                </div>
          </div>
    </div>
  )
}