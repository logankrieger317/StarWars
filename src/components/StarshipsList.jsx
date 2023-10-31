// import App from "../App"
import { useNavigate,Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'



const StarshipsList = () => {
 const [starShips, setShips] = useState([])
  const navigate =useNavigate()


useEffect(() => {
  const getShips = async () => {
    const response = await axios.get(`${BASE_URL}/starships`)
    setShips(response.data.results)
   
    
  }
  getShips()
}, [])




function getLastId(url) {
    return parseInt(url.split('/').slice(-2, -1)[0], 10);
}

if (starShips.length === 0) {
    return <div id='loadingContent'>Loading...</div>
  }else{

  return (
    <div className='contentBox'>
    <div className='card'>
    
      {starShips.map((starShip) => (
        <Link to={`/starships/${getLastId(starShip.url)}`}>
        <div id="card" key={starShip.name}>
          <h2>{starShip.name}</h2>
        </div>
        </Link>
      ))}

      
    </div>
    </div>
  )
}

}

export default StarshipsList