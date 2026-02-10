import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/HomeSection'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <>
      <div className="app-container">
        <NavBar />
        <main className='main-content'> 
          <Home />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
