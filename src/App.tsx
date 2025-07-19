import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Hero/>
      <About/>
      <Education/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
