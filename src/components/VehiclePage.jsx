import  { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../globals"

export default function VehiclePage() {
    const [vehicle, setVehicles] = useState([])
    const { vehicleUrl } = useParams() 
    
    useEffect(() => {
        const fetchVehicleDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/vehicles/${vehicleUrl}`)
                setVehicles(response.data)
                console.log(vehicleUrl)
            } catch (error) {
                console.error("Error fetching vehicle data:", error)
            }
        }

        fetchVehicleDetails()
    }, [vehicleUrl])

    if (vehicle.length === 0) {
    return <div id='loadingContent'>Loading...</div>
  }else{

    return (
        <div id="card" key={vehicle.name}>
                    <h3>{vehicle.name}</h3>
                <div>
                    
                    
                </div>
            <Link to={`/vehciles`}>Return To List</Link>
         
        </div>
    )
}
}