import React from 'react'
import '../../styles/resume/experienceEducation.css'
import '../../styles/resume/expEduCard.css'

const Experience = () => {
    const experienceDetails = [
        {
            year: 'Apr - May 2023',
            name: 'Web Development Internship',
            org: 'YHills',
            short: false,
        },
    ]

    const ExperienceCard = ({ year, name, org, short }) => (
        <div className='education-card'>
          <div className='education-year'>{year}</div>
          <div>{name}</div>
          <div className={short ? 'education-org short-text' : 'education-org'}>{org}</div>
        </div>
    )
  return (
    <div className="education">
      <div className='education-title'>My experience</div>
      <div className='education-caption'>I have my expertise in Web Development</div>
      <div className='education-cards-container'>
        {experienceDetails.map((experienceDetail, i) => (
          <ExperienceCard key={i} {...experienceDetail} />
        ))}
      </div>
    </div>
  )
}

export default Experience
