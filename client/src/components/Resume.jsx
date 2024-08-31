import { React, useState } from 'react'
import Education from './Resume/Education'
import Experience from './Resume/Experience'
import AboutMe from './Resume/AboutMe'
import Skills from './Resume/Skills'
import '../styles/resume/resume.css'

const Resume = () => {
  const [exp, setExp] = useState(true)
  const [edu, setEdu] = useState(false)
  const [skl, setSkl] = useState(false)
  const [abt, setAbt] = useState(false)

  const onExperience =  () => {
    setExp(true)
    setEdu(false)
    setSkl(false)
    setAbt(false)
  }

  const onEducation =  () => {
    setExp(false)
    setEdu(true)
    setSkl(false)
    setAbt(false)
  }

  const onSkills =  () => {
    setExp(false)
    setEdu(false)
    setSkl(true)
    setAbt(false)
  }

  const onAbout =  () => {
    setExp(false)
    setEdu(false)
    setSkl(false)
    setAbt(true)
  }

  return (
    <div className='resume'>
      <div className="hero-info-options">
        <div className='resume-title'>Why hire me?</div>
        <div className='resume-caption'>My passion, skills, and experience make me the ideal candidate.</div>
        <div className={exp ? 'hero-info-option active-option' : 'hero-info-option passive-option'} onClick={onExperience}>Experience</div>
        <div className={edu ? 'hero-info-option active-option' : 'hero-info-option passive-option'} onClick={onEducation}>Education</div>
        <div className={skl ? 'hero-info-option active-option' : 'hero-info-option passive-option'} onClick={onSkills}>Skills</div>
        <div className={abt ? 'hero-info-option active-option' : 'hero-info-option passive-option'} onClick={onAbout}>About me</div>
      </div>

      <div className="hero-info">
        {exp && <Experience />}
        {edu && <Education />}
        {skl && <Skills />}
        {abt && <AboutMe />}
      </div>
    </div>
  )
}

export default Resume
