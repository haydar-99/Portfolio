import React from "react";
import css from "./Technologies.module.css";

function Technologies() {
  return (
    <div className={css.container}>

<div id="Technologies" style={{ marginTop: "50px" }}>
      <div className={css.grid}>
        <h1>Technologies</h1>
        <div></div>
        <div>
          <h2>Frontend Development</h2>
          <div className={css.componentsGrid}>
            <h4>React.js</h4>
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>Javascript</h4>
          </div>
        </div>
        <div>
          <h2>Backend Development</h2>
          <div className={css.componentsGrid}>
            <h4>Node.js</h4>
            <h4>Express.js</h4>
            <h4>MongoDB with Mongoose</h4>
            <h4>Javascript</h4>
          </div>
        </div>
        <div>
          <h2>Database</h2>
          <div className={css.componentsGrid}>
            <h4>MongooDB</h4>
            <h4>SQL</h4>
          </div>
        </div>
        <div>
             <h2>C# .NET Frameworks</h2>
        <div className={css.componentsGrid}>
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
    
  );
}

export default Technologies;
