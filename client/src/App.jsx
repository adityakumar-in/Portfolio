import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Resume from './components/Resume'
import Project from './components/Project'
import Contact from './components/Contact'
import Services from './components/Services'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /><Project /><Services /><Resume /><Contact /></>
    },
    {
      path: "/home",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/services",
      element: <><Navbar /><Services /></>
    },
    {
      path: "/resume",
      element: <><Navbar /><Resume /></>
    },
    {
      path: "/work",
      element: <><Navbar /><Project /></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /></>
    },
  ])

  return (
    <div className='full'>
      <div className='mainPage'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
