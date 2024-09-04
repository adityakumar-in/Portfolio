import { React, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom' 
import '../styles/navbar.css'

const Navbar = () => {
  const location = useLocation()
  const path = location.pathname
  const [dropDown, setDropDown] = useState(false)
  const selectRef = useRef(null)

  const HamburgerDropdown = () => (
    <div className='option-cover'>
      <div className={(path==='/home' || path==='/')  ? "option active-option" : "option"} onClick={()=>{setDropDown(false); removeDropDown()}}><Link className='hamburger-link' to="/home"><li className={path==='/home' ? "hamburger-link active-ham" : "hamburger-link"}>Home</li></Link></div>
      <div className={path==='/work' ? "option active-option" : "option"}  onClick={()=>{setDropDown(false); removeDropDown()}}><Link className='hamburger-link' to="/work"><li className={path==='/work' ? "hamburger-link active-ham" : "hamburger-link"}>Work</li></Link></div>
      <div className={path==='/services' ? "option active-option" : "option"}  onClick={()=>{setDropDown(false); removeDropDown()}}><Link className='hamburger-link' to="/services"><li className={path==='/services' ? "hamburger-link active-ham" : "hamburger-link"}>Services</li></Link></div>
      <div  className={path==='/resume' ? "option active-option" : "option"}  onClick={()=>{setDropDown(false); removeDropDown()}}><Link className='hamburger-link'  to="/resume"><li className={path==='/resume' ? "hamburger-link active-ham" : "hamburger-link"}>Resume</li></Link></div>
      <div className={path==='/contact' ? "option active-option last-active-ham" : "option last-option"} onClick={()=>{setDropDown(false); removeDropDown()}}><Link className='hamburger-link'  to="/contact"><li className={path==='/contact' ? "hamburger-link last-active-ham" : "hamburger-link"}>Contact</li></Link></div>     
    </div>
  )

  const showHideDropDown = () => {
    selectRef.current.classList.toggle('hide-options');
    selectRef.current.classList.toggle('show-options');
  }
  const removeDropDown = () => {
    selectRef.current.classList.add('hide-options');
    selectRef.current.classList.remove('show-options');
  }

  return (
    <div className='navbar'>
      <div className='navbar-title'>
        <Link className="Link Header" to="/"><div id='name'>Aditya<span id='name-suffix'>.</span></div></Link>
        <div className='navbar-body'>
          <ul className='normal-ul'>
            <Link className={(path==='/home' || path==='/') ? "Link active" : "Link passive"} to="/home"><li className='normal-li'>Home</li></Link>
            <Link className={path==='/work' ? "Link active" : "Link passive"}  to="/work"><li className='normal-li'>Work</li></Link>
            <Link className={path==='/services' ? "Link active" : "Link passive"} to="/services"><li className='normal-li'>Services</li></Link>
            <Link className={path==='/resume' ? "Link active" : "Link passive"}  to="/resume"><li className='normal-li'>Resume</li></Link>
            <Link className={path==='/contact' ? "Link active" : "Link passive"}  to="/contact"><li className='normal-li'>Contact</li></Link>
          </ul>
          <div className='hire-me-button'><a href="/contact">Hire me</a></div>
        </div>

        <div className='hamburger-icon' onClick={()=>{setDropDown(true); showHideDropDown()}}><svg width="64px" height="64px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.22400000000000003"></g><g id="SVGRepo_iconCarrier"><path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" fill="#03fd9b"></path><path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" fill="#03fd9b"></path><path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" fill="#03fd9b"></path></g></svg></div>
              <div className='hamburger-drop-down hide-options' ref={selectRef}>
                {dropDown && <HamburgerDropdown />}
              </div>
        </div>

    </div>  
  )
}

export default Navbar
