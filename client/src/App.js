import React from 'react'
import css from "./app.module.css"
import Navbar from './components/Navbar/Navbar'
import HomeP from './components/Home/HomeP'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Technologies from './Technoligies/Technologies'
import AboutMe from "./components/About me/AboutMe"

function App() {
  return (
    <div className={css.app} >
 <Navbar></Navbar>

     <HomeP className ="HomeP"/>
    <Projects/>

   <Technologies style={{marginTop:"200px;"}}/>
     <AboutMe/>
    <Contact/> 
    <div className={css.bottom}> 
    <p> Here are some assets-resources I used to develop my portofolio, <br></br>
     <a href='https://img.freepik.com/free-vector/hand-drawing-illustration-creative-ideas-concept_53876-28456.jpg' target="_blank">freepik</a>
      <br></br> <a href='https://icons8.com/' target="_blank">www.icon8.com</a>
    </p>
    </div>

   
  </div>
    
  )
}

export default App






/* 
 <div id="carouselExampleIndicators" className={`carousel slide `}  data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  
  <div className="carousel-inner">
    <div className="carousel-item active ">
    <HomeP className ="HomeP"/>
    </div>

    <div className="carousel-item  " id='project'>
    <Projects/>
    </div>

    <div className="carousel-item ">
    <Proj></Proj>
    </div>

    <div className="carousel-item ">
    <Technologies style={{marginTop:"200px;"}}/>
    </div>

    

  </div>
  <a className="carousel-control-prev" href="#project" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
*/