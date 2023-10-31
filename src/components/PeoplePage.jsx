import  { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../globals"

export default function PeoplePage() {
    const [people, setPeople] = useState([])
    const { peopleUrl } = useParams() 

    useEffect( () => {
        const fetchPeopleDetails = async  () => {
            try {
                const response = await axios.get(`${BASE_URL}/people/${peopleUrl}`)
                setPeople(response.data)
            } catch (error) {
                console.error("Error.. Error.. Will Robinson:", error)
            }
        }
        fetchPeopleDetails()
    }, [peopleUrl])

    if (people.length === 0) {
    return <div id='loadingContent'>Loading...</div>
  }else{

    return (
        <div id="card" key={people.name}>
                    <h3>{people.name}</h3>
                <div>
                    <p>Height: {people.height}</p>
                    <p>Mass: {people.mass}</p>
                    <p>Gender: {people.gender}</p>
                    
                </div>
            
         <Link to={`/people`}>Return To List</Link>
        </div>
    )
}
}