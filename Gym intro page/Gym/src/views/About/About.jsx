import React from 'react'
import './About.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import img9 from '../../images/conversation.png'

function About() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id="About" className="about">
      <h1>About us</h1>
      <div className="about-flex" data-aos = "fade-up">       
        <div className="left-content">
        <img src={img9} alt="" />
        </div>
        <div  className="right-content">
        <h2>Hey this is D&F's Fitness!!</h2>
        <p>Meet the dynamic duo behind our favorite fitness destination - the founders of this go-to gym website, joining forces to help us reach our fitness goals!</p>
        <a href="http://localhost/Capstone/Music/aboutus.html" target="_blank" rel="noopener noreferrer">Know more about us</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
