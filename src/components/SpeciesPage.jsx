import { Link } from "react-router-dom"
import  { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../globals"

export default function SpeciesPage() {
    const [species, setSpecies] = useState([])
    const { speciesUrl } = useParams() 
    
    useEffect(() => {
        const fetchSpeciesDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/species/${speciesUrl}`)
                setSpecies(response.data)
                console.log(speciesUrl)
            } catch (error) {
                console.error("Error fetching species data:", error)
            }
        }

        fetchSpeciesDetails()
    }, [speciesUrl])

    if (species.length === 0) {
    return <div id='loadingContent'>Loading...</div>
  }else{

    return (
        <div id="card" key={species.name}>
                    <h3>{species.name}</h3>
                <div>
                  <p>Classification: {species.classification}</p>
                    <p>Designation: {species.designation}</p>
                    <p>Average Height: {species.average_height}</p>
                    <p>Average Lifespan: {species.average_lifespan}</p>
                    <p>Language: {species.language}</p>
                   
                </div>
        <Link to={`/species`}>Return To List</Link>
        </div>
    )
}
}