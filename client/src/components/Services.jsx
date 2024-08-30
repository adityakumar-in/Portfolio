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
    <div className='services__card'>
      <div className='hollowFont'>{No}</div>
      <div className='services__title'>{service}</div>
      <div className={short ? 'services__sub-title l1' : 'services__sub-title'}>{detail}</div>
    </div>
  )

  return (
    <div className='services__main'>
      <div className='services__container'>
        {serviceDetails.map((serviceDetail, i) => (
          <Service key={i} {...serviceDetail} />
        ))}
      </div>
    </div>
  )
}

export default Services
