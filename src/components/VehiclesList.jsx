// import App from "../App"
import { useNavigate,Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const VehicleList = () => {
 const [vehicles, setVehicles] = useState([])
 


useEffect(() => {

  const getVehicles = async () => {
    const response = await axios.get(`${BASE_URL}/vehicles`)
    
    setVehicles(response.data.results)
  }
  getVehicles()
}, [])

 function getLastId(url) {
    return parseInt(url.split('/').slice(-2, -1)[0], 10);
}

  if (vehicles.length===0) {
    return <div id='loadingContent'>Loading...</div>
  }else{

  return (
    <div className='contentBox'>
    <div className='card'>
      {vehicles.map((vehicles) => (
        <Link to={`/vehicles/${getLastId(vehicles.url)}`}>
        <div id="card" key={vehicles.name}>
          <h2>{vehicles.name}</h2>
        </div>
        </Link>
      ))}
    </div>
    </div>
  )
}

}

export default VehicleList