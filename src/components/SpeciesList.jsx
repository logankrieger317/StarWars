// import App from "../App"
import { useNavigate,Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const SpeciesList = () => {
 const [species, SpeciesList] = useState([])
  const navigate =useNavigate()
 
useEffect(() => {

  const getSpecies = async () => {
    const response = await axios.get(`${BASE_URL}/species`)
    console.log(response.data.results)

    
    SpeciesList(response.data.results)
  }
  getSpecies()
}, [])

  function getLastId(url) {
    return parseInt(url.split('/').slice(-2, -1)[0], 10);
}

  if (species === 0) {
    return <div>Loading...</div>
  }else{

  return (
    <div className='contentBox'>
    <div className='card'>
      {species.map((species) => (
        <Link to={`/species/${getLastId(species.url)}`}>
        <div id='card' key={species.name}>
          <h2>{species.name}</h2>

        </div>
        </Link>
      ))}
    </div>
    </div>
  )
}

}

export default SpeciesList