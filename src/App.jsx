import React from 'react'
import Navbar from './Components/Nabar/navbar'
import Hero from './Components/Hero/Hero'
import Explore from './Components/ExploreMenu/Explore'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Explore/>
    </div>
  )
}

export default App