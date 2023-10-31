import { useState, useEffect } from 'react'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import { BASE_URL } from './globals'
import './App.css'
import axios from 'axios'




function App() {

  const [starShips, setShips] = useState([])
  const [planets, setPlanets] = useState([])
  const [people, setPeople] = useState([])
  const [films, setFilms] = useState([])
  const [species, setSpecies] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [test,setTest]=useState([])



  return (
    <>
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>

    </div>
    </>
  )
}

export default App
