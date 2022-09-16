import React from 'react'
import css from "./app.module.css"
import Navbar from './components/Navbar/Navbar'
import HomeP from './components/Home/HomeP'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Proj from './components/Projects/Proj'
import Technologies from './Technoligies/Technologies'

function App() {
  return (
    <div className={css.app} >
    <Navbar/>
    <HomeP/>
    <Projects/>
    <Proj></Proj>
    <Technologies style={{marginTop:"200px;"}}/>
  </div>
    
  )
}

export default App