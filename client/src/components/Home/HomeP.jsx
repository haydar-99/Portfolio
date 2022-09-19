import React from 'react'
import css from "./css.module.css"
import Navbar from "../Navbar/Navbar"
import {BiMeteor} from "react-icons/bi"

function HomeP() {
  return (
 <div className={css.container}>
 <Navbar></Navbar>
<section className={css.section} row nopadding id='Home'>
  <div className={css.section}>
    <h2 main center>
      Welcome To <br />
      My Personal Portfolio
    </h2>
    <p>
    I am Haydar and I can help you with many areas that specailly in web development, C# and .NET Frameworks and some of python
    and data science.
    </p>
  </div>
</section>
<div className={css.ainmation}>
  <img src="meteor.jpg" alt='jks'/>
  <img src="meteor.jpg" alt='jks'/>
  <img src="meteor.jpg" alt='jks'/>
  <img src="meteor.jpg" alt='jks'/>
  <img src="meteor.jpg" alt='jks'/>

</div>
</div>
  )
}

export default HomeP