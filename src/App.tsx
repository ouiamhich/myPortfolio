import './App.css'
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import NavigationBar from './components/nav/NavigationBar'
import About from './components/about/About'
import Skills from './components/skills/Skills'

function App() {

  return (
    <>
      <NavigationBar/>
      <Hero/>
      <About/>
      {/* <Education/> */}
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
