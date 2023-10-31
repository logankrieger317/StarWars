import { Link } from "react-router-dom"
import  { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../globals"

export default function PlanetsPage() {
    const [planets, setPlanets] = useState([])
    const { planetsUrl } = useParams() 
    
    useEffect(() => {
        const fetchPlanetsDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/planets/${planetsUrl}`)
                setPlanets(response.data)
                console.log(planetsUrl)
            } catch (error) {
                console.error("Error fetching planets data:", error)
            }
        }

        fetchPlanetsDetails()
    }, [planetsUrl])

    if (planets.length === 0) {
    return <div id='loadingContent'>Loading...</div>
  }else{

    return (
        <div id="card" key={planets.name}>
                    <h3>{planets.name}</h3>
                <div>
                    <p>Diameter: {planets.diameter}</p>
                    <p>Climate: {planets.climate}</p>
                    <p>Terrain: {planets.terrain}</p>
                    <p>Population: {planets.population}</p>
                    
                    
                </div>
            
         <Link to={`/planets`}>Return To List</Link>
        </div>
    )
}
}