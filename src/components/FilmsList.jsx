import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const FilmsList = () => {
 const [films, setFilms] = useState([])
  


useEffect(() => {

  const getFilms = async () => {
    const response = await axios.get(`${BASE_URL}/films`)
    console.log(response.data.results)

    
    setFilms(response.data.results)
  }
  getFilms()
}, [])

  if (!films) {
    return <div>Loading...</div>
  }else{

  return (
    <>
  <div className='contentBox'>
    <div className='card'>
      {films.map((film) => (
        <div className='card-inner' key={film.title}>
          <div className='card-front'>
            <h2>{film.title}</h2>
            <p>{film.opening_crawl}</p>
          </div>
          <div className='card-back'>
            <p>Director: {film.director}</p>
            <p>Producer: {film.producer}</p>
            <p>Release Date: {film.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);


</>
    
  )
}
}

export default FilmsList