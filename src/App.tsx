import './App.css'
import Hero from './components/hero/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NavigationBar from './components/nav/NavigationBar'

function App() {

  return (
    <>
      <NavigationBar/>
      <Hero/>
      <About/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
