import React from 'react'
import '../styles/heroFooter.css'

const HeroFooter = ({ experience, projects, technologies, contest }) => {
  return (
    <div className='footer__container'>
      <div className='footer__sub-container'>
        <div className='footer__title'>{experience}</div>
        <div className='footer__content'>Years of experience</div>
      </div>
      <div className='footer__sub-container'>
        <div className='footer__title'>{projects}</div>
        <div className='footer__content'>Projects completed</div>
      </div>
      <div className='footer__sub-container'>
        <div className='footer__title'>{technologies}</div>
        <div className='footer__content'>Technologies mastered</div>
      </div>
      <div className='footer__sub-container'>
        <div className='footer__title'>{contest}</div>
        {/* <div>Open Source Projects</div> */}
        <div className='footer__content'>Coding contests</div>
      </div>
    </div>
  )
}

export default HeroFooter
