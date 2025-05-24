import React from 'react'
import Navbar from './Components/Nabar/navbar'
import Hero from './Components/Hero/Hero'
import Explore from './Components/ExploreMenu/Explore'
import DiscountExplore from './Components/Discount/DiscountExplore'
import Latest from './Components/Latest/Latest'
import SofreshStory from './Components/Latest/Story/SofreshStory'
import Footer from './Components/Footer/Footer'
import Get from './Components/Get/get'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Explore/>
           <DiscountExplore/>
           <Latest/>
           <SofreshStory/>
           
              <Get/>
           <Footer/>
    </div>
  )
}

export default App