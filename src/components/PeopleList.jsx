// import App from "../App"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const PeopleList = () => {
 const [people, setPeople] = useState([])

useEffect(() => {
  const getPeople = async () => {
    const response = await axios.get(`${BASE_URL}/people`)
    setPeople(response.data.results)
  }
  getPeople()
}, [])


function getLastId(url) {
    return parseInt(url.split(' /').slice(-2, -1)[0], 10);
}

console.log()

if (people.length === 0) {
    return <div id='loadingContent'>Loading...</div>
  }else{
    
  return (
    <div className='contentBox'>
    <div className='card'>
    
      {people.map((people) => (
        <Link to={`/people/${getLastId(people.url)}`}>
        <div id="card" key={people.name}>
          <h2>{people.name}</h2>
        </div>
        </Link>
      ))}
    </div>
    </div>
  )
}
}
export default PeopleList