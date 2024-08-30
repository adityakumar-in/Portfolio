import React from 'react'
import HeroMain from './HeroMain'
import HeroFooter from './HeroFooter'

const Home = () => {
  return (
    <>
      <HeroMain />
      <HeroFooter experience='3' projects='8' technologies='11' contest='12' />
    </>
  )
}

export default Home
