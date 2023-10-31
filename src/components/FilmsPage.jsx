import { Link } from "react-router-dom"
import  { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../globals"

export default function FilmsPage() {
    const [films, setfilms] = useState([])
    const { filmsUrl } = useParams() 
    
    useEffect(() => {
        const fetchfilmsDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/films/${filmsUrl}`)
                setfilms(response.data)
            } catch (error) {
                console.error("Error fetching films data:", error)
            }
        }

        fetchfilmsDetails()
    }, [filmsUrl])

    if (films.length === 0) {
    return <div id='loadingContent'>Loading...</div>
  }else{

    return (
        <div id="card">
                    <h3>{films.title}</h3>
                <div>
                    <p>Director: {films.director}</p>
                    <p>Producer: {films.producer}</p>
                    <p>Release Date: {films.release_date}</p>
                    <p>Opening Crawl: {films.opening_crawl}</p>
                    
                </div>
            <Link to={`/films`}>Return To List</Link>
         
        </div>
    )
}
}