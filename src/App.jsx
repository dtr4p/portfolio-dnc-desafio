import './App.css'
import About from './sections/About'
import Navbar from './sections/Navbar'
import Contacts from './sections/Contacts'
import Techs from './sections/Techs'
import Projects from './sections/Projects'

function App() {


  return (
    <div>
        <Navbar/>
        <br/><br/>  
        <About/>
        <br/><br/><br/><br/>
        <Techs/>
        <br/><br/>
        <Projects/>
        <br/><br/>
        <Contacts/>
    </div>
  )
}

export default App
