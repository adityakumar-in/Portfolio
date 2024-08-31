import React from 'react'
import '../../styles/resume/experienceEducation.css'
import '../../styles/resume/expEduCard.css'

const Education = () => {
  const EducationDetails = [
    {
      year: '2021 - 2025',
      course: 'B Tech. - Computer Science',
      org: 'IMS Engineering College',
      short: false,
    },
    {
      year: 'Jan - Mar 2023',
      course: 'C Programming',
      org: 'NPTEL',
      short: true,
    },
    {
      year: 'Jan - Apr 2023',
      course: 'Python Programming',
      org: 'NPTEL',
      short: true,
    },
  ]

  const EducationCard = ({ year, course, org, short }) => (
    <div className='education-card'>
      <div className='education-year'>{year}</div>
      <div>{course}</div>
      <div className={short ? 'education-org short-text' : 'education-org'}>{org}</div>
    </div>
  )

  return (
    <div className="education">
      <div className='education-title'>My education</div>
      <div className='education-caption'>Education equips skills and knowledge for this role. Eager to apply academic background to real-world projects.</div>
      <div className='education-cards-container'>
        {EducationDetails.map((educationDetail, i) => (
          <EducationCard key={i} {...educationDetail} />
        ))}
      </div>
    </div>
  )
}

export default Education
