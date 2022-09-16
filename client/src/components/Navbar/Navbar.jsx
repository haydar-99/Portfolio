import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import css from "./nav.module.css"

function Navbar() {
  return (
    <div>
    <nav className= {`nav justify-content-center ${css.nav}  `}>
      <ul className={css.nav}>
        <li><a href="#Home">Home</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav></div>
  )
}

export default Navbar