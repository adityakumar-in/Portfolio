import React from 'react'

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
    <div className={short ? 'education__card m' : 'education__card'}>
      <div className='education__year'>{year}</div>
      <div>{course}</div>
      <div className={short ? 'education__org c' : 'education__org'}>{org}</div>
    </div>
  )

  return (
    <div className="education">
      <div className='education__title'>My education</div>
      <div className='education__sub-title'>Education equips skills and knowledge for this role. Eager to apply academic background to real-world projects.</div>
      <div className='education__cards'>
        {EducationDetails.map((educationDetail, i) => (
          <EducationCard key={i} {...educationDetail} />
        ))}
      </div>
    </div>
  )
}

export default Education
