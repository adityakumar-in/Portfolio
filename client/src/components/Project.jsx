import { React, useState } from 'react'
import ProjectCard from './ProjectCard'
import '../styles/work/project.css'

const Project = () => {
  const totalProjects = 8
  const [next, setNext] = useState(1)

  const Projects = {
    1: {
      No: '01',
      title: 'Expense Tracker',
      about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, corporis inventore quia corrupti, quidem fugiat omnis deserunt iusto animi optio dolorum harum alias eum doloribus vel.',
      technologies: ['React Js', 'CSS', 'MongoDB', 'Express Js'],
      img: 'proj1.png',
      link: 'https://www.google.com/',
      github: 'https://www.facebook.com/'
    },
    2: {
      No: '02',
      title: 'Weather Forecast',
      about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, corporis inventore quia corrupti, quidem fugiat omnis deserunt iusto animi optio dolorum harum alias eum doloribus vel.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      img: 'proj1.png',
      link: 'https://www.google.com/',
      github: 'https://www.facebook.com/'
    },
    3: {
      No: '03',
      title: 'Quiz Website',
      about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, corporis inventore quia corrupti, quidem fugiat omnis deserunt iusto animi optio dolorum harum alias eum doloribus vel.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      img: 'proj1.png',
      link: 'https://www.google.com/',
      github: 'https://www.facebook.com/'
    },
    4: {
      No: '04',
      title: 'Toder',
      about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, corporis inventore quia corrupti, quidem fugiat omnis deserunt iusto animi optio dolorum harum alias eum doloribus vel.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      img: 'proj1.png',
      link: 'https://www.google.com/',
      github: 'https://www.facebook.com/'
    },
    5: {
      No: '05',
      title: 'Pronsica',
      about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, corporis inventore quia corrupti, quidem fugiat omnis deserunt iusto animi optio dolorum harum alias eum doloribus vel.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node Js'],
      img: 'proj1.png',
      link: 'https://www.google.com/',
      github: 'https://www.facebook.com/'
    },
    6: {
      No: '06',
      title: 'Twitter(X) Clone',
      about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, corporis inventore quia corrupti, quidem fugiat omnis deserunt iusto animi optio dolorum harum alias eum doloribus vel.',
      technologies: ['HTML', 'Tailwind'],
      img: 'proj1.png',
      link: 'https://www.google.com/',
      github: 'https://www.facebook.com/'
    },
    7: {
      No: '07',
      title: 'Musical Wizard App',
      about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, corporis inventore quia corrupti, quidem fugiat omnis deserunt iusto animi optio dolorum harum alias eum doloribus vel.',
      technologies: ['Android', 'Kotlin'],
      img: 'proj1.png',
      link: 'https://www.google.com/',
      github: 'https://www.facebook.com/'
    },
    8: {
      No: '08',
      title: 'Unit Converter',
      about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, corporis inventore quia corrupti, quidem fugiat omnis deserunt iusto animi optio dolorum harum alias eum doloribus vel.',
      technologies: ['Python', 'Tkinter'],
      img: 'proj1.png',
      link: 'https://www.google.com/',
      github: 'https://www.facebook.com/'
    }
  }

  return (
    <div className='slider'>
        <ProjectCard {...Projects[next]} next={next} setNext={setNext} totalProjects={totalProjects}/>
    </div>
  )
}

export default Project