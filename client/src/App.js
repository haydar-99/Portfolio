import React from 'react'
import css from "./app.module.css"
import Navbar from './components/Navbar/Navbar'
import HomeP from './components/Home/HomeP'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Proj from './components/Projects/Proj'

function App() {
  return (
    <div className={css.app} >
    <Navbar/>
    <HomeP/>
    <Projects/>
    <Proj></Proj>
  </div>
    
  )
}

export default App