import React from 'react'

const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className='aboutme__title'>About me</div>
      <div className='aboutme__sub-title'>I love learning new things, meeting people, and seeing things from different angles. I'm good at understanding big problems and finding creative solutions from a zoom-out perspective.</div>

      <div className='aboutme__card'>
        <div className='aboutme__head'>Name <span className='aboutme__body'>Aditya Kumar</span></div>
        <div className='aboutme__head'>Email <span className='aboutme__body'>adityaakumar.in@gmail.com</span></div>
      </div>
      <div className='aboutme__card'>
        <div className='aboutme__head'>Experience <span className='aboutme__body'>3+ Years</span></div>
        <div className='aboutme__head'>Instagram <span className='aboutme__body'>@coding.tutor</span></div>
      </div>
      <div className='aboutme__card'>
        <div className='aboutme__head'>Nationality <span className='aboutme__body'>Indian</span></div>
        <div className='aboutme__head'>Location <span className='aboutme__body'>Ghaziabad, India</span></div>
      </div>
      <div className='aboutme__card'>
        <div className='aboutme__head'>Freelance <span className='aboutme__body'>Available</span></div>
        <div className='aboutme__head'>Languages <span className='aboutme__body'>English, Hindi</span></div>
      </div>
    </div>
  )
}

export default AboutMe
