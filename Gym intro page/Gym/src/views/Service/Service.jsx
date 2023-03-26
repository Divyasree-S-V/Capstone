import React from 'react'
import './Service.css'
import ServiceBox from '../../components/ServiceBox/ServiceBox'

function Service() {
  return (
    <>
    <div id="Services" className='services'>
      <h1>Our Services</h1>
      <div className="boxes">
      <ServiceBox animation = "fade-up" icon = "fas fa-bookmark" heading = "Our plans" text = "Basic,  Premium,  Deluxe"/>
        <ServiceBox animation = "fade-up" icon = "fas fa-calculator" heading = "BMI calculation" text = "We ask the user's height and weight and calculate their BMI(Body Mass Index) and provide them with their suitable workouts.." />
        
        <ServiceBox animation = "fade-up" icon = "fas fa-video" heading = "Expert Instructions" text = "Users won't have to stuggle while working out on their own, experts have got your back!! Only deluxe members have access to this"/>

        <ServiceBox animation = "fade-up" icon = "fas fa-music" heading = "D&F's Playlist" text = "We also provide a song application with 4 playlist which only premium and deluxe members have access to." />
        </div>
    </div>
    </>
  )
}

export default Service
