import React from 'react'
import './Home.css'
import img8 from '../../../src/images/gym5.png'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

function Home() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id='Home' className='home'>
      <div className="home-flex">
        <div className="left-content" data-aos = "fade-down" data-aos-delay= "2000">
          <p>The best fitness gym in town</p>
          <h1>is here!!!</h1>
          <h2><span className="typing"></span></h2>
          <a href="http://localhost/Capstone/Login%20and%20Signup%20Form%20with%20Email%20Verification/signup-user.php" target="_blank" rel="noopener noreferrer">Join us</a>
        </div>
        <div className="right-content" data-aos = "fade-up" data-aos-delay= "2000">
          <img src={img8} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home

