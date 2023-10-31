import Home from './Home'
import Nav from './Nav'
import StarshipsList from './StarshipsList'
import PlanetsList from './PlanetsList'
import PeopleList from './PeopleList'
import SpeciesList from './SpeciesList'
import VehicleList from './VehiclesList'
import FilmsList from './FilmsList'
import FilmsPage from './FilmsPage'
import StarshipsPage from './StarshipsPage'
import PeoplePage from './PeoplePage'
import PlanetsPage from './PlanetsPage'
import SpeciesPage from './SpeciesPage'
import VehiclePage from './VehiclePage'
import { Routes, Route } from 'react-router-dom'





function Main() {
  return (
    <> 
    <div className="Main">
    
      

       <Routes>
          <Route path='/Nav' element={<Nav/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/planets' element={<PlanetsList/>}/>
          <Route path='/starships' element={<StarshipsList/>}/>
          <Route path='/people' element={<PeopleList/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/species' element={<SpeciesList/>}/>
          <Route path='/vehicles' element={<VehicleList/>}/>
          <Route path='/films' element={<FilmsList/>}/>
          <Route path ="/starships/:starshipUrl" element={<StarshipsPage/>}/>
          <Route path ="/films/:filmsUrl" element={<FilmsPage/>}/>
          <Route path ="/people/:peopleUrl" element={<PeoplePage/>}/>
          <Route path='/planets/:planetsUrl' element={<PlanetsPage/>}/>
          <Route path='/species/:speciesUrl' element={<SpeciesPage/>}/>
          <Route path='/vehicles/:vehiclesUrl' element={<VehiclePage/>}/>
          

        </Routes>
     
      

     </div>
    </>
  )
}

export default Main