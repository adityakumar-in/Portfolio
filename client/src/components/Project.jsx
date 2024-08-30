import React from 'react'
import '../styles/project.css'

const Project = ({ No, title, about, technologies, img, link, github, next, setNext, totalProjects }) => {

  const prevProject = () => {
    if(next-1 < 1) setNext(totalProjects)
    else setNext((next - 1))
  }
  const nextProject = () => {
    if(next+1 > totalProjects) setNext(1)
    else setNext((next + 1))
  }
  return (
    <div className='pro__cover slide'>
      <div onClick={prevProject} className='changeSlide'><svg xmlns="http://www.w3.org/2000/svg" className='rotate' onClick={()=>{setNext((next+1)%8)}} height="40px" viewBox="0 -960 960 960" width="40px" fill="#D9D9D9"><path d="m320-116-34-34 330-330-330-330 34-34 364 364-364 364Z"/></svg></div>  
        <div className='project'>
          <div className='project__left'>
            <div className='left__card'>
              <div className='project__number'>{No}</div>
              <div className='project__title'>{title}</div>
              <div className='project__content'>{about}</div>
              <div>{technologies.map((technology, i) => (<span className='tag' key={i}>{technology}</span>))}</div>
            </div> 
            <div className='right__card'>
              <div className="project__link" onClick={()=>{window.open(link, '_blank')}}><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FFFFFF"><path d="m223.19-201.15-22.04-22.04L667-688.65H361.5v-30.2h357.73v357.73h-30.19V-667.5L223.19-201.15Z"/></svg></div>
              <div className="project__github" onClick={()=>{window.open(github, '_blank')}}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg></div>
            </div>
          </div>
          <div className='project__right'>
            <div className="hang">Do Visit</div>
            <img src={img} alt="Project Preview" />
          </div>
        </div>
      <div onClick={nextProject} className='changeSlide'><svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{setNext((next+1)%8)}} height="40px" viewBox="0 -960 960 960" width="40px" fill="#D9D9D9"><path d="m320-116-34-34 330-330-330-330 34-34 364 364-364 364Z"/></svg></div>  
    </div>
  )
}

export default Project
