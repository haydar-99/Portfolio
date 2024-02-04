import React from 'react'
import css from "./aboutMe.module.css"


function AboutMe() {
  return (
 <div className={css.container}>
 <div id='About' className={css.title}> <h1>About Me</h1></div>
 <div className={css.text}>
    <p>
        I grew up and studied my hgih school(Arbitur)  and software developement in Sweden.
        
        My high school program is called Natural Science Program
        with orientation and focus on math and natrual science.<br></br>
        I live currently in Germany.
        <br/>
       <br/>
       <br/> A cliché that every one says "I am a fast learner", Which I will say too, however luckliy I have a proof when it comes to 
        software development. 
        <br/>In My last internship I developed a backend micro-service , I integrated a Qgis modell and Implemented it headless
        as a micro-service 
        which became my thisis. Just let me know if you want a copy of it in english &#128521;        

    </p>
 </div>

</div>
  )
}

export default AboutMe
