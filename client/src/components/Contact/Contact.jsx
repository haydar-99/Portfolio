import React from 'react'
import css from "./Contact.module.css"

function Contact() {
  return (
    <div className={`${css.section}`}>
    <div >
    <p><i ></i> Chicago, US</p>
    <p><i ></i> Phone: +00 151515</p>
    <p><i > </i> Email: mail@mail.com</p>
  </div><br/>
<p>Let's get in touch. Send me a message:</p>
    <form action="/action_page.php" target="_blank">
    <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name"/></p>
    <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email"/></p>
    <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject"/></p>
    <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message"/></p>
    <p>
      <button className="w3-button w3-light-grey w3-padding-large" type="submit">
        <i className="fa fa-paper-plane"></i> SEND MESSAGE
      </button>
    </p>
  </form>
  <div/>
    
  

  
</div>
  )
}

export default Contact