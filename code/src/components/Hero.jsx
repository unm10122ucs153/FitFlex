import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      
      <div className="hero-text">
        <span>
          <div className="hero-line" />
          <h5>Rep Zone</h5>
        </span>
        <h2>"Train Like a Warrior, Evolve Like a Legend—Upgrade Your Life,<b>Fitness</b> One Rep at a Time!"  <b>Upgrade</b> Your Life Quest!</h2>
        <a href="#search"><button>View more</button></a>
      </div>
    </div>
  )
}

export default Hero