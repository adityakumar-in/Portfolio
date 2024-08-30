import { React, useState } from 'react'
import '../styles/resume.css'
import Education from './Resume/Education'
import Experience from './Resume/Experience'
import AboutMe from './Resume/AboutMe'
import Skills from './Resume/Skills'

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
      <div className="Resume__Left">
        <div className='resume__title'>Why hire me?</div>
        <div className='resume__sub-title'>My passion, skills, and experience make me the ideal candidate.</div>
        <div className={exp ? 'resume__btn active-r' : 'resume__btn passive-r'} onClick={onExperience}>Experience</div>
        <div className={edu ? 'resume__btn active-r' : 'resume__btn passive-r'} onClick={onEducation}>Education</div>
        <div className={skl ? 'resume__btn active-r' : 'resume__btn passive-r'} onClick={onSkills}>Skills</div>
        <div className={abt ? 'resume__btn active-r' : 'resume__btn passive-r'} onClick={onAbout}>About me</div>
      </div>

      <div className="Resume__Right">
        {exp && <Experience />}
        {edu && <Education />}
        {skl && <Skills />}
        {abt && <AboutMe />}
      </div>
    </div>
  )
}

export default Resume
