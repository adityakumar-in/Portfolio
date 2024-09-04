import React from 'react'
import '../../styles/resume/aboutMe.css'

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className='about-me-title'>About me</div>
      <div className='about-me-caption'>I love learning new things, meeting people, and seeing things from different angles. I'm good at understanding big problems and finding creative solutions from a zoom-out perspective.</div>

      <div className='about-me-container'>
        <div className='about-me-card'>
          <div className='about-me-info'><div className='about-me-name'>Name</div><span className='about-me-info-link'>Aditya Kumar</span></div>
          <div className='about-me-info'><div className='about-me-name'>Email</div><span className='about-me-info-link link-hover' onClick={()=>{window.open('https://mail.google.com/mail/?view=cm&fs=1&to=adityaakumar.in@gmail.com', '_blank')}}>adityaakumar.in@gmail.com</span></div>
        </div>
        <div className='about-me-card'>
          <div className='about-me-info'><div className='about-me-name'>Experience</div><span className='about-me-info-link'>3+ Years</span></div>
          <div className='about-me-info'><div className='about-me-name'>Instagram</div><span className='about-me-info-link link-hover' onClick={()=>{window.open('https://www.instagram.com/coding.tutor/', '_blank')}}>@coding.tutor</span></div>
        </div>
        <div className='about-me-card'>
          <div className='about-me-info'><div className='about-me-name'>Freelance</div><span className='about-me-info-link flicker'  onClick={()=>{window.open('https://www.fiverr.com/adityadevelops/', '_blank')}}>Available</span></div>
          <div className='about-me-info'><div className='about-me-name'>Languages</div><span className='about-me-info-link'>English, Hindi</span></div>
        </div>
        <div className='about-me-card'>
          <div className='about-me-info'><div className='about-me-name'>Nationality</div><span className='about-me-info-link'>Indian</span></div>
          <div className='about-me-info'><div className='about-me-name'>Location</div><span className='about-me-info-link link-hover' onClick={()=>{window.open('https://maps.app.goo.gl/qnnc9oHsUv2D5kU18', '_blank')}}>Ghaziabad, India</span></div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
