// import App from "../App"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const FilmsList = () => {
 const [films, setFilms] = useState([])

useEffect(() => {
  const getFilms = async () => {
    const response = await axios.get(`${BASE_URL}/films`)
    setFilms(response.data.results)
  }
  getFilms()
}, [])

function getLastId(url) {
    return parseInt(url.split('/').slice(-2, -1)[0], 10);
}

if (films.length === 0) {
    return <div id='loadingContent'>Loading...</div>
  }else{
    
  return (
    <div className='contentBox'>
    <div className='card'>
    
      {films.map((films) => (
        <Link to={`/films/${getLastId(films.url)}`}>
        <div id="card" key={films.title}>
          <h2>{films.title}</h2>
        </div>
        </Link>
      ))}
    </div>
    </div>
  )
}
}
export default FilmsList