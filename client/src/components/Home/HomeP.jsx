import React from 'react'
import css from "./css.module.css"

function HomeP() {
  return (
 <>
<section className={css.section} row nopadding id='Home'>
  <div className={css.section}>
    <h2 main center>
      Welcome To <br />
      My Personal Portfolio
    </h2>
    <p>
    The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
    </p>
  </div>
</section>
</>
  )
}

export default HomeP