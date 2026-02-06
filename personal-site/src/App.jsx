import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/HomeSection'

function App() {

  return (
    <>
       <NavBar /> 
       <Home />
    </>
  )
}

export default App
