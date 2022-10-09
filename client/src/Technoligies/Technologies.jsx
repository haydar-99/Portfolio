import React from "react";
import css from "./Technologies.module.css";
import Bounce from 'react-reveal/Bounce';

function Technologies() {
  return (
   <div className={css.container2}>
   
      <div className={css.grid2}>

      <Bounce left >
      <div className={css.skills}>
        <div>
          <div className={css.componentsGrid}>
          <h4>Frontend Development</h4>
            <ul>
            <li>React.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            </ul>
           
          </div>
        </div>
        <div>
          <div className={css.componentsGrid}>
          <h4>Backend Development</h4>
            <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB with Mongoose</li>
            <li>Javascript</li>
            </ul>
            
          </div>
        </div>
        <div>
          <div className={css.componentsGrid}>
          
          <h4>Database</h4>
          <ul>
            <li>MongooDB</li>
            <li>SQL</li>
          </ul>
          
         
          </div>
        </div>
        <div>
        <div className={css.componentsGrid}>
        <h4>C# .NET Frameworks</h4>
        <ul>
           <li>Windows Forms Application</li>
           <li>WPF Applications</li> 
        </ul>

          
        </div>
        </div>
       
        <div>
        <div className={css.componentsGrid}>
            <h4>Python and Datascience</h4>
          
          <ul>
             <li>Qgis</li>
             <li>Pyqgis</li> 
          </ul>
          
        </div>
        </div>
        <div>
        <div className={css.componentsGrid}>
            <h4> Other techs</h4>
            
            <ul>
            <li>Git & Github </li>
            <li>Docker</li>
            </ul>
           
           
        </div>
        </div>


        </div>
      </Bounce>
       
      <Bounce right>
      {/* right foto */}
      <div className={css.foto}></div>
      </Bounce>
        
        


      </div>

   </div>
    
  );
}

export default Technologies;



/*

 <div className={css.container}>

<div id="Technologies" style={{ marginTop: "50px" }}>
      <div className={css.grid}>
        <h1>Technologies</h1>
        <div></div>
        <div>
          <div className={css.componentsGrid}>
          <h2>Frontend Development</h2>

            <h4>React.js</h4>
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>Javascript</h4>
          </div>
        </div>
        <div>
          <div className={css.componentsGrid}>
          <h2>Backend Development</h2>

            <h4>Node.js</h4>
            <h4>Express.js</h4>
            <h4>MongoDB with Mongoose</h4>
            <h4>Javascript</h4>
          </div>
        </div>
        <div>
          <div className={css.componentsGrid}>
          <h2>Database</h2>

            <h4>MongooDB</h4>
            <h4>SQL</h4>
          </div>
        </div>
        <div>
        <div className={css.componentsGrid}>
        <h2>C# .NET Frameworks</h2>

           <h4>Windows Forms Application</h4>
           <h4>WPF Applications</h4> 
        </div>
        </div>
       
        <div>
        <div className={css.componentsGrid}>
            <h2>Python and Datascience</h2>
           <h4>Qgis</h4>
           <h4>Pyqgis</h4> 
        </div>
        </div>
        <div>
        <div className={css.componentsGrid}>
            <h2> Other techs</h2>
            <h4>Git & Github </h4>
           <h4>Docker</h4>
           
        </div>
        </div>

      </div>
    </div>

    </div>



*/