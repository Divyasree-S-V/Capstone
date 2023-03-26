import React from 'react'
import './Contact.css'
import ContactBox from '../../components/ContactBox/ContactBox'

function Contact() {
  return (
    <>
    <div id="Contact" className='contact'>
      <h1>Contact Us</h1>
      <div className="boxes">
        <ContactBox animation="fade-right" class= "fas fa-envelope" name="Email" link="http://localhost/Capstone/Email%20Subscription%20form/index.php"/>
        <ContactBox animation="fade-up" class= "fab fa-instagram" name="Instagram" link=""/>
        <ContactBox animation="fade-left" class= "fab fa-linkedin" name="Linkedin" link=""/>
      </div>

    </div>
    </>
  )
}

export default Contact
