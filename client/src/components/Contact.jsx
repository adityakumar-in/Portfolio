import { React, useState, useEffect, useRef } from 'react'
import '../styles/contact/contact.css'
import '../styles/contact/dropDown.css'
import '../styles/contact/links.css'
import '../styles/contact/form.css'

const Contact = () => {
  const [inpActive, setInpActive] = useState('')
  const [dropDown, setDropDown] = useState(false)
  const [select, setSelect] = useState('Web Development')
  const dropDownRef = useRef()
  const selectRef = useRef(null)

  const contactDetails = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#03fd9b" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/></svg>,
      name: 'Message me',
      info: '@coding.tutor',
      link: 'https://www.instagram.com/coding.tutor/'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#03fd9b"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/></svg>,
      name: 'Email',
      info: 'adityaakumar.in@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=adityaakumar.in@gmail.com'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#03fd9b"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z"/></svg>,
      name: 'Address',
      info: 'Ghaziabad, India',
      link: 'https://maps.app.goo.gl/qnnc9oHsUv2D5kU18'
    },
  ]

  useEffect(() => {
    dropDownRef.current.value = {select}
  }, [dropDown])
  
  const showHideDropDown = () => {
    selectRef.current.classList.toggle('hide-options');
    selectRef.current.classList.toggle('show-options');
  }
  const removeDropDown = () => {
    selectRef.current.classList.add('hide-options');
    selectRef.current.classList.remove('show-options');
  }

  const DropDownOptions = () => (
    <>
      <div className='options-caption'>Select your domain</div>
      <div className='options' onClick={()=>{setDropDown(false); setSelect('Web Development');}}>Web Development</div>
      <div className='options' onClick={()=>{setDropDown(false); setSelect('UI/UX Desing');}}>UI/UX Design</div>
      <div className='options' onClick={()=>{setDropDown(false); setSelect('Content Creation');}}>Content Creation</div>
      <div className='options' onClick={()=>{setDropDown(false); setSelect('Tutoring');}}>Tutoring</div>
      <div className='options' onClick={()=>{setDropDown(false); setSelect('Others');}}>Others</div>
    </>
  )
  
  const ContactCard = ({icon, name, info, link}) => (
    <div className='contact-card'>
      <div>{icon}</div>
      <div>
        <div>{name}</div>
        <div id='link-icon' onClick={()=>{window.open(link, '_blank')}}>{info}</div>
      </div>
    </div>
  )

  const ContactCards = () => (
    <div className='contact-details'>
      <div>
        {contactDetails.map((contactDetail, index) => (
          <ContactCard key={index} {...contactDetail} />
        ))}
      </div>
    </div>
  )

  return (
    <div className='user-container'>
      <div className='collaboration-container'>
        <div className="collaboration-form-card" onMouseLeave={removeDropDown}>
          <div className='collab-card-title'>Let's work together</div>
          <div className='collab-card-caption'>Fill your details below</div>

          <form action="">

            <div className='input-container'>
              <input type="text" className='input-text' placeholder='Name' onFocus={()=>{setInpActive('name')}}  onBlur={()=>{setInpActive('')}} id={inpActive==='name' && 'active-input'} />
              <input type="text" className='input-text' placeholder='Project Name' onFocus={()=>{setInpActive('project')}}  onBlur={()=>{setInpActive('')}} id={inpActive==='project' && 'active-input'} />
            </div>

            <div className='input-container'>
              <input type="number" className='input-number' placeholder='Phone No.' onFocus={()=>{setInpActive('phone')}}  onBlur={()=>{setInpActive('')}} id={inpActive==='phone' && 'active-input'} />
              <input type="mail" className='input-mail' required placeholder='E-mail' onFocus={()=>{setInpActive('mail')}}  onBlur={()=>{setInpActive('')}}  id={inpActive==='mail' && 'active-input'} />
            </div>

            <div className='drop-down-container' onClick={()=>{setInpActive('drop');setDropDown(true); showHideDropDown()}}  onMouseLeave={()=>{setInpActive('')}}  id={inpActive==='drop' && 'active-input'}>
              <div ref={dropDownRef}>{select}</div>
              <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B7B7B7"><path d="M480-380 276-584l20-20 184 184 184-184 20 20-204 204Z"/></svg></div>

              <div className='drop-down hide-options' ref={selectRef}>
                {dropDown && <DropDownOptions />}
              </div>
            </div>

            <textarea name="message" className='project-detail-input' onFocus={()=>{setInpActive('tarea')}} onBlur={()=>{setInpActive('')}} id={inpActive==='tarea' && 'active-input'} cols="30" rows="7" placeholder='Enter your project details here'></textarea>
            <input type="button" className='submit-button' value="Send message" />
            
          </form>
        </div>
      </div>

      <ContactCards />
    </div>
  )
}

export default Contact