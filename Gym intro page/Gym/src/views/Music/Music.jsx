import React from 'react'
import './Music.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import MusicBox from '../../components/MusicBox/MusicBox'
import img7 from  '../../images/playlisthome.png'
import img5 from  '../../images/p1.png'
import img3 from  '../../images/p2.png'
import img4 from  '../../images/p3.png'
import img1 from  '../../images/p4.png'

function Music() {
  useEffect(() =>{
    Aos.init({
      duration : 500
    })
  },[])
  return (
    <div id='Project' className='project'>
      <h1>About our playlist</h1>
      <div data-aos = "fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <MusicBox title = "Home Page" img= {img7}/>
            <MusicBox title = "Anime hits❤️" img= {img5}/>
            <MusicBox title = "India's Best🎷" img= {img3}/>
            <MusicBox title = "Electronic⚡" img= {img4} />
            <MusicBox title = "Workout🏋" img= {img1} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Music
