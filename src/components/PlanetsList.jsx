// import App from "../App"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const PlanetsList = () => {
 const [planets, setPlanets] = useState([])
  // const [selectedShip, setSelectedShip] = useState(null)


useEffect(() => {

  const getPlanets = async () => {
    const response = await axios.get(`${BASE_URL}/planets`)
    console.log(response.data.results)

    
    setPlanets(response.data.results)
  }
  getPlanets()
}, [])

  console.log(planets)

  if (!planets) {
    return <div>Loading...</div>
  }else{

  return (
    <div className='contentBox'>
    <div className='card'>
      {planets.map((planets) => (
        <div id='card' key={planets.name}>
          <h2>{planets.name}</h2>
          <p>Gravity: {planets.gravity}</p>
          <p>Climate: {planets.terrain}</p>
          <p>Population: {planets.population}</p>
          <p>Orbital Period: {planets.orbital_period} days</p>
          <p></p>
        </div>
      ))}
    </div>
    </div>
  )
}

}

export default PlanetsList