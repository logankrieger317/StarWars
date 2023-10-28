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


useEffect(() => {
  const getShips = async () => {
    const response = await axios.get(`${BASE_URL}`)
    setShips(response)
  }
  getShips()
}, [])

useEffect(() => {
  const getPlanets = async () => {
    const response = await axios.get(`${BASE_URL}`)
    setPlanets(response)
  }
  getPlanets()
}, [])

useEffect(() => {
  const getPeople = async () => {
    const response = await axios.get(`${BASE_URL}`)
    setPeople(response)
  }
  getPeople()
}, [])

useEffect(() => {
  const getFilms = async () => {
    const response = await axios.get(`${BASE_URL}`)
    setFilms(response)
  }
  getFilms()
}, [])

useEffect(() => {
  const getSpecies = async () => {
    const response = await axios.get(`${BASE_URL}`)
    setSpecies(response)
  }
  getSpecies()
}, [])

useEffect(() => {
  const getVehicles = async () => {
    const response = await axios.get(`${BASE_URL}`)
    setVehicles(response)
  }
  getVehicles()
}, [])

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
