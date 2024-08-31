import React from 'react'
import '../../styles/resume/aboutMe.css'

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className='about-me-title'>About me</div>
      <div className='about-me-caption'>I love learning new things, meeting people, and seeing things from different angles. I'm good at understanding big problems and finding creative solutions from a zoom-out perspective.</div>

      <div className='about-me-card'>
        <div className='about-me-info'>Name <span className='about-me-info-link'>Aditya Kumar</span></div>
        <div className='about-me-info'>Email <span className='about-me-info-link'>adityaakumar.in@gmail.com</span></div>
      </div>
      <div className='about-me-card'>
        <div className='about-me-info'>Experience <span className='about-me-info-link'>3+ Years</span></div>
        <div className='about-me-info'>Instagram <span className='about-me-info-link'>@coding.tutor</span></div>
      </div>
      <div className='about-me-card'>
        <div className='about-me-info'>Nationality <span className='about-me-info-link'>Indian</span></div>
        <div className='about-me-info'>Location <span className='about-me-info-link'>Ghaziabad, India</span></div>
      </div>
      <div className='about-me-card'>
        <div className='about-me-info'>Freelance <span className='about-me-info-link'>Available</span></div>
        <div className='about-me-info'>Languages <span className='about-me-info-link'>English, Hindi</span></div>
      </div>
    </div>
  )
}

export default AboutMe
