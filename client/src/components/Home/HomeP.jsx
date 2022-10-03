import React from 'react'
import css from "./css.module.css"
import Navbar from "../Navbar/Navbar"
import {BiMeteor} from "react-icons/bi"
import video from "../Home/smoke.mp4"

function HomeP() {
  return (
 <div className={css.container}>
 <Navbar></Navbar>
  <div className={css.text}>
  <video src={video} muted autoPlay></video>
  
  <span>
    "Hello
  </span>
  <span>
    World"
  </span>
  <div className={css.p}> <p>
    I am Haydar and I can help you with many areas that specailly in web development, C# and .NET Frameworks and some of python
    and data science.
    </p>
    </div>
 
  </div>
  <div className={css.ringsContainer}>
      <div className={css.rings}></div>
      <div className={css.rings}></div>
      <div className={css.rings}></div>
</div>
</div>
  )
}

export default HomeP












/*
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
<img src="https://img.icons8.com/color/48/000000/comet.png"/>
<img src="https://img.icons8.com/color/48/000000/comet.png"/>
<img src="https://img.icons8.com/color/48/000000/comet.png"/>
<img src="https://img.icons8.com/color/48/000000/comet.png"/>
<img src="https://img.icons8.com/color/48/000000/comet.png"/>

</div>
</div>
  )
}

export default HomeP




.text span{
    font-weight: 800px;
    font-size: 100px;
    transition: 1s;
    -webkit-transition: 1s;
    -moz-transition: 1s;
    
    animation: reveal 2.5s linear forwards;

    opacity: 0;
    filter: blur(13px);
    margin-right:20px ;
    color: #ffeb3b;
    -webkit-box-reflect: below -120px linear-gardient(transparent, #0008);
    text-shadow: 0 0 10px #ff8c3b,
                 0 0 40px #ff8c3b,
                 0 0 80px #ff8c3b,
                 0 0 240px #ff8c3b;
    
    
    ;
}

*/