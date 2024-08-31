import React from 'react'
import '../styles/home/heroInfo.css'

const HeroFooter = ({ experience, projects, technologies, contest }) => {
  return (
    <div className='heroInfo-container'>
      <div className='heroInfo'>
        <div className='heroInfo-title'>{experience}</div>
        <div className='heroInfo-content'>Years of experience</div>
      </div>
      <div className='heroInfo'>
        <div className='heroInfo-title'>{projects}</div>
        <div className='heroInfo-content'>Projects completed</div>
      </div>
      <div className='heroInfo'>
        <div className='heroInfo-title'>{technologies}</div>
        <div className='heroInfo-content'>Technologies mastered</div>
      </div>
      <div className='heroInfo'>
        <div className='heroInfo-title'>{contest}</div>
        {/* <div>Open Source Projects</div> */}
        <div className='heroInfo-content'>Coding contests</div>
      </div>
    </div>
  )
}

export default HeroFooter