import './App.css'
import Hero from './components/hero/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NavigationBar from './components/nav/NavigationBar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Education from './components/education/Education'

function App() {

  return (
    <>
      <NavigationBar/>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
