import Home from './Home'
import Nav from './Nav'
import StarshipsList from './StarshipsList'
import PlanetsList from './PlanetsList'
import PeopleList from './PeopleList'
import SpeciesList from './SpeciesList'
import VehicleList from './VehiclesList'
import FilmsList from './FilmsList'
import FilmsTest from './FilmsTest'

import { Routes, Route } from 'react-router-dom'


function Main() {
  
  

  return (
    <> 
    <div className="Main">
    
      

       <Routes>
          <Route path='/Nav' element={<Nav/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/PlanetsList' element={<PlanetsList/>}/>
          <Route path='/StarshipsList' element={<StarshipsList/>}/>
          <Route path='/PeopleList' element={<PeopleList/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/SpeciesList' element={<SpeciesList/>}/>
          <Route path='/VehiclesList' element={<VehicleList/>}/>
          <Route path='/FilmsList' element={<FilmsList/>}/>
          <Route path='/FilmsTest' element={<FilmsTest/>}/>

        </Routes>
     
      

     </div>
    </>
  )
}

export default Main