import React from 'react'
import '../styles/About.css'
import aboutImg from '../assets/about-Img.png'

const About = () => {
  return (
    <div className='about-container' id='about'>

      <div className="about-image">
          <img src={aboutImg} alt="" />
      </div>

      <div className="about-text">
          <span>
            <div className="about-line" />
            <h5>About Us</h5>
          </span>
          <h3>"Your Fitness Journey Starts Today with Rep Zone..!"</h3>
          <p>Welcome to Rep Zone, Success in fitness is not about being perfect—it's about being consistent. The small choices you make every day build the foundation of your strength, confidence, and discipline. So show up. Move your body. Stay committed. And most importantly, believe in yourself.

You have the power to transform. Your journey starts now. Keep pushing forward. You got this! </p>
      </div>

    </div>
  )
}

export default About