import { Link } from "react-router-dom"
import  { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../globals"

export default function StarshipPage() {
    const [starship, setStarship] = useState([])
    const { starshipUrl } = useParams() 
    
    useEffect(() => {
        const fetchStarshipDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/starships/${starshipUrl}`)
                setStarship(response.data)
                console.log(starshipUrl)
            } catch (error) {
                console.error("Error fetching starship data:", error)
            }
        }

        fetchStarshipDetails()
    }, [starshipUrl])

    if (starship.length === 0) {
    return <div id='loadingContent'>Loading...</div>
  }else{

    return (
        <div id="card" key={starship.name}>
                    <h3>{starship.name}</h3>
                <div>
                    <p>Model: {starship.model}</p>
                    <p>Class: {starship.starship_class}</p>
                    <p>Crew: {starship.crew}</p>
                    
                </div>
            
         <Link to={`/starships`}>Return To List</Link>
        </div>
    )
}
}