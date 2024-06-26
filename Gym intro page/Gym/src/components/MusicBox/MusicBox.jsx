import React from 'react'
import './MusicBox.css'

import { useEffect } from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'

function ProjectBox(props) {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
      <div className='projectbox'>
        <img src={props.img} alt="images" />
        <div className="details">        
          <p>{props.title}</p>
          <a href={props.link} target="_blank" rel="noopener noreferrer"></a>
        </div>
    </div>
  )
}

export default ProjectBox

