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
          {/* <p>Model: {starShip.model}</p>
          <p>Manufacturer: {starShip.manufacturer}</p>
          <p>Cost in credits: {starShip.cost_in_credits}</p>
          <p>Length: {starShip.length}</p>
          <p>Max atmosphering speed: {starShip.max_atmosphering_speed}</p>
          <p>Crew: {starShip.crew}</p>
          <p>Passengers: {starShip.passengers}</p>
          <p>Cargo capacity: {starShip.cargo_capacity}</p>
          <p>Consumables: {starShip.consumables}</p>
          <p>Hyperdrive rating: {starShip.hyperdrive_rating}</p>
          <p>MGLT: {starShip.MGLT}</p>
          <p>Starship class: {starShip.starship_class}</p>  */}
        </div>
      ))}
    </div>
    </div>
  )
}

}

export default PlanetsList