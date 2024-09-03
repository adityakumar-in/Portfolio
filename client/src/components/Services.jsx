import React from 'react'
import '../styles/services.css'

const Services = () => {
  const serviceDetails = [
    {
      No: '01',
      service: 'Web Development',
      detail: 'Building bridges between the digital and the real world, connecting people & ideas.',
      short: false,
    },
    {
      No: '02',
      service: 'UI/UX Design',
      detail: 'Crafting digital magic, pixel by pixel.',
      short: true,
    },
    {
      No: '03',
      service: 'Content Creation',
      detail: 'Weaving words into magic, stories that hooks',
      short: true,
    },
    {
      No: '04',
      service: 'Tutoring',
      detail: 'Stay ahead with cutting-edge tech & learn, adapt in this digital age.',
      short: false,
    },
  ]

  const Service = ({ No, service, detail, short }) => (
    <div className='service-card'>
      <div className='service-number'>{No}</div>
      <div className='service-title'>{service}</div>
      <div className={short ? 'about-service short-service-text' : 'about-service'}>{detail}</div>
    </div>
  )

  return (
    <div className='services-cover'>
      <div className='services-container'>
        <div className='services'>
          {serviceDetails.map((serviceDetail, i) => (
            <Service key={i} {...serviceDetail} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
