import { React, useState } from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom' 

const Navbar = () => {
  const [active, setActive] = useState('')

  const slashClicked = () => {setActive('')}
  const homeClicked = () => {setActive('home')}
  const workClicked = () => {setActive('work')}
  const servicesClicked = () => {setActive('services')}
  const resumeClicked = () => {setActive('resume')}
  const contactClicked = () => {setActive('contact')}

  return (
    <div className='navbar'>
      <div className='navbar__header-flex'>
        <Link className="Link Header" to="/" onClick={slashClicked}><div id='name'>Aditya<span id='name-suffix'>.</span></div></Link>
        <div className='navbar__body'>
          <ul>
            <Link className={active==='home' ? "Link active" : "Link passive"} to="/home" onClick={homeClicked}><li>Home</li></Link>
            <Link className={active==='work' ? "Link active" : "Link passive"}  to="/work" onClick={workClicked}><li>Work</li></Link>
            <Link className={active==='services' ? "Link active" : "Link passive"} to="/services" onClick={servicesClicked}><li>Services</li></Link>
            <Link className={active==='resume' ? "Link active" : "Link passive"}  to="/resume" onClick={resumeClicked}><li>Resume</li></Link>
            <Link className={active==='contact' ? "Link active" : "Link passive"}  to="/contact" onClick={contactClicked}><li>Contact</li></Link>
          </ul>
          <div className='navbar__btn'>Hire me</div>
        </div>
      </div>
    </div>  
  )
}

export default Navbar
