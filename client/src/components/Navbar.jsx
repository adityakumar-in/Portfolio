import { React } from 'react'
import { Link, useLocation } from 'react-router-dom' 
import '../styles/navbar.css'

const Navbar = () => {
  const location = useLocation()
  const path = location.pathname

  return (
    <div className='navbar'>
      <div className='navbar-title'>
        <Link className="Link Header" to="/"><div id='name'>Aditya<span id='name-suffix'>.</span></div></Link>
        <div className='navbar-body'>
          <ul>
            <Link className={path==='/home' ? "Link active" : "Link passive"} to="/home"><li>Home</li></Link>
            <Link className={path==='/work' ? "Link active" : "Link passive"}  to="/work"><li>Work</li></Link>
            <Link className={path==='/services' ? "Link active" : "Link passive"} to="/services"><li>Services</li></Link>
            <Link className={path==='/resume' ? "Link active" : "Link passive"}  to="/resume"><li>Resume</li></Link>
            <Link className={path==='/contact' ? "Link active" : "Link passive"}  to="/contact"><li>Contact</li></Link>
          </ul>
          <div className='hire-me-button'>Hire me</div>
        </div>
      </div>
    </div>  
  )
}

export default Navbar
