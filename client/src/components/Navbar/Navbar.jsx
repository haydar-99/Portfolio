import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import css from "./nav.module.css"
import  "./nav.module.css"

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  




  return (
    <div>
    <a className={css.toggle_button} onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }} >
      <span className={css.bar}></span>
      <span className={css.bar}></span>
      <span className={css.bar}></span>
    </a>
    <nav className= {isNavExpanded ? css.expanded : css.nav}>

      <ul >
        <li><a href="#Home">Home</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Technologies">Technologies</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
    <span className={css.span}></span>
    </div>
  )
}

export default Navbar

