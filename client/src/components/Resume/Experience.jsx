import React from 'react'

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
        <div className={short ? 'education__card m' : 'education__card'}>
          <div className='education__year'>{year}</div>
          <div>{name}</div>
          <div className={short ? 'education__org c' : 'education__org'}>{org}</div>
        </div>
    )
  return (
    <div className="education">
      <div className='education__title'>My experience</div>
      <div className='education__sub-title'>I have my expertise in Web Development</div>
      <div className='education__cards'>
        {experienceDetails.map((experienceDetail, i) => (
          <ExperienceCard key={i} {...experienceDetail} />
        ))}
      </div>
    </div>
  )
}

export default Experience
