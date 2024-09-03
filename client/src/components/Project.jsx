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
      img: 'project-image/expense-tracker.png',
      link: 'https://github.com/adityakumar-in/Expense-Tracker',
      github: 'https://github.com/adityakumar-in/Expense-Tracker'
    },
    2: {
      No: '02',
      title: 'Weather Forecast',
      about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, corporis inventore quia corrupti, quidem fugiat omnis deserunt iusto animi optio dolorum harum alias eum doloribus vel.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      img: 'project-image/expense-tracker.png',
      link: 'https://github.com/adityakumar-in/weather',
      github: 'https://github.com/adityakumar-in/weather'
    },
    3: {
      No: '03',
      title: 'Quiz Website',
      about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, corporis inventore quia corrupti, quidem fugiat omnis deserunt iusto animi optio dolorum harum alias eum doloribus vel.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      img: 'project-image/expense-tracker.png',
      link: 'https://replit.com/@thesourcecodes/Kaun-Banega-Crorepati',
      github: 'https://replit.com/@thesourcecodes/Kaun-Banega-Crorepati'
    },
    4: {
      No: '04',
      title: 'Toder',
      about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, corporis inventore quia corrupti, quidem fugiat omnis deserunt iusto animi optio dolorum harum alias eum doloribus vel.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      img: 'project-image/toder.png',
      link: 'https://toder.netlify.app',
      github: 'https://github.com/adityakumar-in/Toder'
    },
    5: {
      No: '05',
      title: 'Pronsica',
      about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, corporis inventore quia corrupti, quidem fugiat omnis deserunt iusto animi optio dolorum harum alias eum doloribus vel.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node Js'],
      img: 'project-image/expense-tracker.png',
      link: 'https://github.com/adityakumar-in/Pronsica',
      github: 'https://github.com/adityakumar-in/Pronsica'
    },
    6: {
      No: '06',
      title: 'Twitter (X) Clone',
      about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, corporis inventore quia corrupti, quidem fugiat omnis deserunt iusto animi optio dolorum harum alias eum doloribus vel.',
      technologies: ['HTML', 'Tailwind'],
      img: 'project-image/expense-tracker.png',
      link: 'https://www.instagram.com/coding.tutor/',
      github: 'https://www.instagram.com/coding.tutor/'
    },
    7: {
      No: '07',
      title: 'Musical Wizard App',
      about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, corporis inventore quia corrupti, quidem fugiat omnis deserunt iusto animi optio dolorum harum alias eum doloribus vel.',
      technologies: ['Android', 'Kotlin'],
      img: 'project-image/expense-tracker.png',
      link: 'https://play.google.com/store/apps/details?id=com.adityadev.myapplication&pcampaignid=web_share',
      github: 'https://play.google.com/store/apps/details?id=com.adityadev.myapplication&pcampaignid=web_share'
    },
    8: {
      No: '08',
      title: 'Unit Converter',
      about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, corporis inventore quia corrupti, quidem fugiat omnis deserunt iusto animi optio dolorum harum alias eum doloribus vel.',
      technologies: ['Python', 'Tkinter'],
      img: 'project-image/expense-tracker.png',
      link: 'https://github.com/adityakumar-in/u-converter',
      github: 'https://github.com/adityakumar-in/u-converter'
    }
  }

  return (
    <div className='slider'>
        <ProjectCard {...Projects[next]} next={next} setNext={setNext} totalProjects={totalProjects}/>
    </div>
  )
}

export default Project