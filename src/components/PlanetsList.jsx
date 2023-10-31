// import App from "../App"
import { useNavigate,Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const PlanetsList = () => {
 const [planets, setPlanets] = useState([])
  const navigate =useNavigate()


useEffect(() => {
  const getPlanet = async () => {
    const response = await axios.get(`${BASE_URL}/planets`)
    setPlanets(response.data.results)
   
    
  }
  getPlanet()
}, [])

function getLastId(url) {
    return parseInt(url.split('/').slice(-2, -1)[0], 10);
}

if (planets.length === 0) {
    return <div id='loadingContent'>Loading...</div>
  }else{

  return (
    <div className='contentBox'>
    <div className='card'>
    
      {planets.map((planets) => (
        <Link to={`/planets/${getLastId(planets.url)}`}>
        <div id="card" key={planets.name}>
          <h2>{planets.name}</h2>
        </div>
        </Link>
      ))}

      
    </div>
    </div>
  )
}

}

export default PlanetsList