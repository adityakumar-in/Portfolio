import { React, useRef, useEffect } from 'react'
import '../styles/work/project.css'
import '../styles/work/arrows.css'
import '../styles/work/tags.css'
import '../styles/work/links.css'
import '../styles/work/image.css'

const ProjectCard = ({ No, title, about, technologies, img, link, github, next, setNext, totalProjects }) => {
  const projectCard = useRef(null)

  const prevProject = () => {
    return new Promise(async (resolve, reject) => {
      // Change project after 0.5s, so it looks like the card is swapping with the next card (as animation is of 1s)
      setTimeout(() => {
        projectCard.current.classList.toggle('animate')
        if(next-1 < 1) setNext(totalProjects) // Reset to last project (When first project is reached)
        else setNext((next - 1))
      }, 500)

      // Remove animation after completion, so that the card can be animated again
      setTimeout(() => {
        projectCard.current.classList.toggle('animate')
      }, 1)

      resolve()
    })
  }

  const nextProject = () => {
    return new Promise(async (resolve, reject) => {
      // Change project after 0.5s, so it looks like the card is swapping with the next card (as animation is of 1s)
      setTimeout(async () => {
        await projectCard.current.classList.toggle('animate')

        if(next+1 > totalProjects) await setNext(1)  // Reset to first project (When last project is reached)
        else await setNext((next + 1))
      }, 500)

      // Remove animation after completion, so that the card can be animated again
      setTimeout(() => {
        projectCard.current.classList.toggle('animate')
      }, 1)

      resolve()
    })  
  }

  const LeftArrow = () => (
    <div onClick={prevProject} className='change-project-arrow'><svg xmlns="http://www.w3.org/2000/svg" className='rotateLeftArrow' height="40px" viewBox="0 -960 960 960" width="40px" fill="#D9D9D9"><path d="m320-116-34-34 330-330-330-330 34-34 364 364-364 364Z"/></svg></div>  
  )
  const RightArrow = () => (
    <div onClick={nextProject} className='change-project-arrow'><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#D9D9D9"><path d="m320-116-34-34 330-330-330-330 34-34 364 364-364 364Z"/></svg></div>  
  )

  const ProjectInfo = () => (
    <div className='project-info'>
      <div className='project-number'>{No}</div>
      <div className='project-title'>{title}</div>
      <div className='about-project'>{about}</div>
      <div>{technologies.map((technology, i) => (<ProjectTag i={i} technology={technology} />))}</div>
    </div> 
  )

  const ProjectTag = ({ i, technology }) => (
    <span className='tag' key={i}>{technology}</span>
  )

  const ProjectLinks = () => (
    <div className='project-links'>
      <div className="project-website-link" onClick={()=>{window.open(link, '_blank')}}><svg xmlns="http://www.w3.org/2000/svg" className='link-icon' height="32px" viewBox="0 -960 960 960" width="32px" fill="#FFFFFF"><path d="m223.19-201.15-22.04-22.04L667-688.65H361.5v-30.2h357.73v357.73h-30.19V-667.5L223.19-201.15Z"/></svg></div>
      <div className="project-github-link" onClick={()=>{window.open(github, '_blank')}}><svg xmlns="http://www.w3.org/2000/svg" className='link-icon' width="32" height="32" fill="white" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg></div>
    </div>
  )

  const ProjectImage = () => (
    <img src={img} alt="Project Preview" className='project-image' />
  )

  return (
    <div className='project-container'>
      <LeftArrow />

      <div ref={projectCard}>
        <div className='project'>
          <div className='project-image-container'>
            <div className="masked-text">Do Visit</div>
            <ProjectImage />
          </div>
          
          <div className='project-info-container'>
            <ProjectInfo />
            <ProjectLinks />
          </div>
        </div>
      </div>
        
      <RightArrow />
    </div>
  )
}

export default ProjectCard